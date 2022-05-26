import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';
import DeleteingModalForUser from './DeleteingModalForUser';

const MyOrders = () => {
    // const [orders,setOrders] = useState([])
    const [user,loading] = useAuthState(auth)
    const [deleteByUser,setDeleteByUser] = useState(null)
    const email = user.email
    const { data: orders, isLoading,refetch } = useQuery(['services',email], () => fetch(`https://thawing-island-69083.herokuapp.com/order?email=${email}`).then(res => res.json()))


    //  useEffect(()=>{
    //      fetch(`https://thawing-island-69083.herokuapp.com/order?email=${email}`)
    //      .then(res=>res.json())
    //      .then(data=>{
    //          setOrders(data)
    //      })
    //  },[email])

 if(loading || isLoading){
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
        <th>Price</th>
        <th>Quantity</th>
        <th>Total Price</th>
        <th>Cancel Order</th>
         <th>Payment</th>
      </tr>
    </thead>
    <tbody>
  {orders.map((o,i)=><tr key={o._id} >
  
                   <th>{i + 1}</th>
                   <td>{o.tool}</td>
                   <td>${o.price}</td>
                <td>{o.quantity}</td>
                <td>${o.quantity*o.price}</td>
                <td>{ (o.price && !o.paid) && 
                <label onClick={()=>setDeleteByUser(o)} htmlFor="delete-modal-user" className="btn text-semibold btn-error btn-xs">Cancel</label>
                  }
                  { (o.price && o.paid) && <p className='font-bold text-error'> Already Paid </p> }
                  </td>
                <td>{(o.price && !o.paid) && <Link to={`/dashboard/order/${o._id}`}>
                  
                <button className='btn btn-xs btn-primary'>pay</button></Link>}
                                    
                                    {(o.price && o.paid) && 
                                    <div>
                                        <p>
                                          <span className='text-primary'>Paid</span>
                                        </p>
                                        <p>Transaction id: <span className='text-orange-600'>{o.transactionId}</span></p>
                                    </div>}
                                    </td>
                                    </tr>)}  
     
     
     
    </tbody>
     </table>
      </div>

      {
         deleteByUser && <DeleteingModalForUser
         key={deleteByUser._id}
         deleteByUser={deleteByUser}
         setDeleteByUser={setDeleteByUser}
         refetch={refetch}
         ></DeleteingModalForUser>
      }
        </div>
    );
};

export default MyOrders;