import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';

const MyOrders = () => {
    const [orders,setOrders] = useState([])
    const [user,loading] = useAuthState(auth)
    const email = user.email

     useEffect(()=>{
         fetch(`http://localhost:5000/order?email=${email}`)
         .then(res=>res.json())
         .then(data=>{
             console.log(data)
             setOrders(data)
         })
     },[email])

 if(loading){
     return <Loading></Loading>
 }


    return (
        <div>
           <h2 className='text-2xl font-serif font-bold p-4 '>Your Orders:{orders.length}</h2> 
           <div className="overflow-x-auto">
  <table className="table w-full">
   
    <thead>
      <tr>
          <th>No</th>
        
        <th>Tool</th>
        <th>Quantity</th>
        <th>Cancel Order</th>
         <th>Payment</th>
      </tr>
    </thead>
    <tbody>
  {orders.map((o,i)=><tr key={o._id} >
  
                   <th>{i + 1}</th>
                   <td>{o.tool}</td>
                <td>{o.quantity}</td>
                <td><button className="btn text-semibold btn-error btn-xs">Cancel</button></td>
                <td><button className="btn text-semibold  btn-primary  btn-xs">Pay</button></td>
        
  </tr>)}  
     
     
     
    </tbody>
  </table>
</div>
        </div>
    );
};

export default MyOrders;