import React from "react";
import contact from "../../assets/icons/contact.svg";
import forum from "../../assets/icons/forum.svg";
import register from "../../assets/icons/register.svg";

const Contact = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 text-success bg-slate-800">
       
       <div className="w-64  p-10">
           <img className="mb-2" src={contact} alt="" />
           <h3 className="text-xl mb-2">Contact Us</h3>
           <p>Have any comments or question?We will love to hear you from</p>
       </div>
       <div className="w-64  p-10">
           <img className="mb-2" src={forum} alt="" />
           <h3 className="text-xl mb-2"><span className="font-bold">DeWalt</span> Forum</h3>
           <p>Join the community today and talk with other pros</p>
       </div>
       <div className="w-64  p-10">
           <img className="mb-2" src={register} alt="" />
           <h3 className="text-xl mb-2"> Product Registration</h3>
           <p>DeWalt product are backed by the best coverage in the industry</p>
       </div>
       
    </div>
  );
};

export default Contact;
