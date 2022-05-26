import React, { useEffect, useState } from 'react';
import Review from './Review';

const Reviews = () => {
    const [reviews,setReviews] = useState([])
    useEffect(()=>{
        fetch('https://thawing-island-69083.herokuapp.com/review')
        .then(res=>res.json())
        .then(data=>{
            setReviews(data)
        })
        
    },[])
    return (
        <div>
           <h2 className='text-4xl font-extrabold text-center my-10'>What Our Customer Says_</h2> 
           <div className='grid grid-cols-1 lg:grid-cols-4 my-10 gap-4'>

            {
                reviews.map(review=><Review key={review._id} review={review} ></Review>)
            }

           </div>
        </div>
    );
};

export default Reviews;