import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import DeleteModal from './DeleteModal';

const ManageOrders = () => {
    const [deletingOrder,setDeletingOrder] = useState(null)
    const { data: orders, isLoading,refetch } = useQuery('orders', () => fetch('https://thawing-island-69083.herokuapp.com/allOrder').then(res => res.json()))

    if(isLoading){
        return <Loading></Loading>
    }
    return (
        <div>
           <h2 className="text-2xl font-serif font-bold p-4">All Products:{orders.length}</h2> 
           <div className="overflow-x-auto">
  <table className="table w-full table-normal">
   
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
                
                <td>{ (o.price && !o.paid) && 
                <label htmlFor="delete-modal" onClick={()=>setDeletingOrder(o)} className="btn text-semibold btn-error btn-xs">Cancel</label>
                  }
                  { (o.price && o.paid) && <p className='font-bold text-error'>  Paid </p> }
                  </td>
                <td>{(o.price && !o.paid) && 
                  
                <button className='btn btn-xs btn-primary'>Unpaid</button>}
                                    
                                    {(o.price && o.paid) && 
                                    <div>
                                        <p>
                                          <span className='text-primary'>Pending</span>
                                        </p>
                                       
                                    </div>}
                                    </td>

                {/* <Link to={`/dashboard/order/${o._id}`}><button className='btn btn-xs btn-primary'>pay</button></Link> */}
        
  </tr>)}  
     
     
     
    </tbody>
  </table>
</div>
{
    deletingOrder && <DeleteModal
    deletingOrder={deletingOrder}
    key={deletingOrder._id}
    refetch={refetch}
    setDeletingOrder={setDeletingOrder}
    ></DeleteModal>
}
        </div>
    );
};

export default ManageOrders;