import React from "react";
import {AiFillStar} from "react-icons/ai"

const Review = (props) => {
  const { review, ratings } = props.review;
  return (
    <div className="card lg:max-w-xs mx-2 bg-stone-100 text-neutral">
  <div className="card-body">
   
    <p className="font-semibold ">"{review}"</p>
    <p className="font-bold ">Ratings: <span> {ratings}<AiFillStar 
       className="inline text-lg mb-1 text-amber-500" /> </span></p>
   
   
  </div>
</div>
  );
};

export default Review;
