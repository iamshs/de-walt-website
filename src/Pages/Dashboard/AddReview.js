import React from 'react';

const AddReview = () => {

 const handleReview = e =>{
     e.preventDefault()
     const reviews = {
         review: e.target.review.value,
         ratings:e.target.ratings.value
     }
     fetch('https://thawing-island-69083.herokuapp.com/review',{
         method:'POST',
         headers:{
             'content-type':'application/json'
         },
         body:JSON.stringify(reviews)
     })
     .then(res=>res.json())
     .then(data=>{
         console.log(data)
         e.target.reset()
     })
 }
   

    return (
        <div>
            <h2 className='text-2xl font-bold font-serif  p-4'>Please Add a Review</h2>

            <div className="card  bg-base-100  flex justify-center items-center ">
        <div className="card-body mt-8  bg-slate-800">
          <h2 className="card-title text-center text-3xl font-serif text-success font-extrabold  w-full max-w-xs">Say Something About Us</h2>
         <form onSubmit={handleReview} className='form-control'>

         <textarea className="textarea textarea-success" name='review' required placeholder="Please Write Something about us ">

         </textarea>

              <input
                type="text"
                name="ratings"
                required
                placeholder=" Please Rate us Between 1 to 5"
                className="input input-bordered my-2 input-success w-full max-w-xs"
              />
             
            
              
          
          <input
              className="btn  w-full max-w-xs "
              type="Submit"
              value={"SUBMIT"}
            />
         </form>
          </div>
        </div>
        </div>
    );
};

export default AddReview;