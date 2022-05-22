import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../firebase.init";

const Deliver = () => {
  const { _id } = useParams();
  const [toolDetail, setToolDetail] = useState([]);
  const [user] = useAuthState(auth);
  useEffect(() => {
    fetch(`http://localhost:5000/tool/${_id}`)
      .then((res) => res.json())
      .then((data) => setToolDetail(data));
  }, [_id]);

  //placing order 

  const handleSubmit = e =>{
      e.preventDefault()  


      const orders = {
          userEmail : user.email,
          userName : user.displayName,
          phone: e.target.phone.value,
          address : e.target.address.value
      }
     

      fetch('http://localhost:5000/order',{
          method:'POST',
          headers:{
            "content-type":"application/json"
          },
          body:JSON.stringify(orders)
      })
      .then(res=>res.json())
      .then(result=>{
          console.log(result)
          if(result.success===true){
             toast('Your Order has Set')
          }
          else{
            toast('You already made an order previously')
          }
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
              <input
                type="Submit"
                value={"Order"}
                className="btn btn-secondary my-2 w-80 text-white"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Deliver;
