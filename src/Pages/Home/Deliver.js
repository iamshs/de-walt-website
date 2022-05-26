import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useParams } from "react-router-dom";
import auth from "../../firebase.init";

const Deliver = () => {
  const { _id } = useParams();
  const [toolDetail, setToolDetail] = useState([]);
const [reload,setReload] = useState(false)
const [error,setError] = useState('')
const [isDisabled, setIsDisabled] = useState(false);
  const [user] = useAuthState(auth);
  useEffect(() => {
    fetch(`https://thawing-island-69083.herokuapp.com/tool/${_id}`)
      .then((res) => res.json())
      .then((data) => setToolDetail(data));
  }, [toolDetail,_id]);

 const handleDisable = e =>{
  const quantity = e.target.value
  const min = toolDetail.minQuantity
  const max= toolDetail.availableQuantity
   if (quantity <  min ) {
     setIsDisabled(true)
     setError('You order can not be less than Minimum Quantity')
    

   }
   else if(max < quantity){
     setIsDisabled(true)
     setError('You order can not be more than Available Quantity ')
    
   }
   else{
     setIsDisabled(false)
    
     setError('')

   }
 }
  
 
  const handleSubmit = e =>{
      e.preventDefault()  
    
   

      const orders = {
          userEmail : user.email,
          userName : user.displayName,
          phone: e.target.phone.value,
          address : e.target.address.value,
          tool:toolDetail.name,
          quantity:e.target.quantity.value,
          price:toolDetail.price
          
      }
     

      fetch('https://thawing-island-69083.herokuapp.com/order',{
          method:'POST',
          headers:{
            "content-type":"application/json"
          },
          body:JSON.stringify(orders)
      })
      .then(res=>res.json())
      .then(result=>{
          console.log(result)
          e.target.reset()
      })
 
  }

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col  lg:flex-row-reverse">
        <div className="card max-w-lg bg-base-100 shadow-xl">
          <figure>
            <img className="w-40" src={toolDetail.img} alt={toolDetail.name} />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-3xl font-extrabold ">
              {toolDetail.name}
            </h2>
            <p className="text-semibold">{toolDetail.description}</p>
            <p> <span className="text-xl font-bold">Available Quantity:</span> {toolDetail.availableQuantity} </p>
            <p> <span className="text-xl font-bold">Minimum Order Quantity:</span> {toolDetail.minQuantity} </p>
            <p> <span className="text-xl font-bold">Price:$</span> {toolDetail.price} </p>
          </div>
        </div>
        <div className="card flex-shrink-0 w-full max-w-md shadow-2xl bg-base-100">
          <div className="card-body">
            <form onSubmit={handleSubmit} className='form-control'>
              <input
                type="text"
                name="name"
              
                disabled
                value={user?.displayName || ""}
                className="input input-bordered my-2 input-success w-full max-w-xs"
              />
              <input
                type="email"
                name="email"
                disabled
                value={user?.email || ""}
                className="input input-bordered my-2 input-success w-full max-w-xs"
              />
              <input
                type="text"
                name="phone"
                required
                placeholder="Your Number"
                className="input input-bordered my-2 input-success w-full max-w-xs"
              />
              <input
                type="text"
                name="address"
                required
                placeholder="Your Address"
                className="input input-bordered my-2 input-success w-full max-w-xs"
              />
             <input type="number"  onChange={handleDisable} defaultValue={toolDetail.minQuantity}  className="input input-bordered my-2 input-success w-full max-w-xs" name="quantity"   placeholder="Set quantity" />
              <input
                type="Submit"
                value={"Order"}
                disabled={isDisabled}
                className="btn btn-secondary my-2 w-80 text-white"
               
              />
            </form>
            {
           error &&  <p className="text-error font-2xl font-bold">{error}</p>
         }
          </div>
        
        </div>
      
      </div>
    
    </div>
  );
};

export default Deliver;
