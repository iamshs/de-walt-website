import React from "react";

const Review = (props) => {
  const { review, ratings } = props.review;
  return (
    <div class="card w-96 bg-stone-100 text-neutral">
  <div class="card-body">
   
    <p className="font-semibold ">"{review}"</p>
    <p className="font-bold ">Ratings: <span>{ratings}</span></p>
   
   
  </div>
</div>
  );
};

export default Review;
