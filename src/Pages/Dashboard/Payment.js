import { Elements } from '@stripe/react-stripe-js';
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../Shared/Loading';
import CheckoutForm from './CheckoutForm';
import {loadStripe} from '@stripe/stripe-js';

const Payment = () => {
    const { id } = useParams();
    const url = `http://localhost:5000/order/${id}`;
    const stripePromise = loadStripe('pk_test_51L0jrBAox4HLroFQeTQ1sQ9llIIQqZGr8BMBMttanYSgj5QU0CHLATxc4GWndRXh0yixa0qqMWMiQ1rZNki435aE00N1HdeAwx');
    const { data:order , isLoading} = useQuery(['order',id],()=>fetch(url).then(res=>res.json()))
   
    if (isLoading) {
        return <Loading></Loading>
    }
    const price = order.price * parseInt(order.quantity)

    return (
        <div>
        <div class="card w-50 max-w-md bg-base-100 shadow-xl my-12">
            <div class="card-body">
                <p className=" text-2xl font-serif font-bold">Hello, {order.userName}</p>
                {/* <h2 class="card-title">Please Pay for {order.treatment}</h2> */}
                <p>Your Order Quantity: <span className='text-orange-700 text-xl'>{order.quantity}</span></p>
                <p className='font-bold'>Please Pay: <span className='text-xl '>${price}</span></p>
            </div>
        </div>
        <div class="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
            <div class="card-body">
                <Elements stripe={stripePromise}>
                    <CheckoutForm order={order} 
                    />
                </Elements>
            </div>
        </div>
    </div>
);
};

export default Payment;