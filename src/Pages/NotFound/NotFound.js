import React from 'react';
import notfound from '../../assets/not-found.jpg'

const NotFound = () => {
    return (
        <div className='flex items-center justify-center '>
           <div class="card max-w-xl  bg-base-100 shadow-xl image-full">
  <figure>
      <img src={notfound} alt="Shoes" />
  </figure>
  <div class="card-body">
    <h2 class="card-title">NotFound</h2>
  </div>
</div> 
        </div>
    );
};

export default NotFound;