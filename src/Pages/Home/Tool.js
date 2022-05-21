import React from 'react';

const Tool = ({tool}) => {
    const {name,_id,description,img,price,minQuantity,availableQuantity} = tool
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl my-10">
  <figure>
      <img className='w-32 h-32 p-4' src={img} alt={name} />
      </figure>
  <div className="card-body">
    <h2 className="card-title text-primary">{name}</h2>
    <p className='font-semibold'>{description}</p>
    <p className='text-xl '> <span className='font-bold'>Price:$</span>{price}</p>
    <p className='text-lg'>Available Quantity: {availableQuantity}</p>
    <p className=' text-lg font-bold'>Minimum Order Quantity: {minQuantity}</p>
    <div className="card-actions justify-end">
      <button className="btn bg-gradient-to-r text-white font-bold border-none from-cyan-500 to-primary">Buy Now</button>
    </div>
  </div>
</div>
    );
};

export default Tool;