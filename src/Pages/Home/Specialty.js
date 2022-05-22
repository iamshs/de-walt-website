import React from "react";

const Specialty = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 my-10">
      <div className="card w-96  p-4  bg-gradient-to-r from-success to-bg-base-200  text-neutral ">
        <div className="card-body">
          <h2 className="card-title text-center">Need A demo?</h2>
          <p>
            Our Experts are available to demo any of our tools at a time and
            place that works for you
          </p>
        </div>
      </div>
      <div className="card w-96  p-4 text-neutral bg-gradient-to-r from-success to-bg-base-200  ">
        <div className="card-body">
          <h2 className="card-title text-center">Product Registration</h2>
          <p>
          Our Tools are backed by the best coverage in the industry. Register your product today!
          </p>
        </div>
      </div>
      <div className="card w-96 p-4 text-neutral bg-gradient-to-r from-success to-bg-base-200  ">
        <div className="card-body">
          <h2 className="card-title text-center">Where to buy?</h2>
          <p>
          Search by postal code to find the De Walt professional tool distributor close to you.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Specialty;
