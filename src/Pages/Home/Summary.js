import React from "react";
import { FiPackage } from "react-icons/fi";
import { FaPeopleArrows } from "react-icons/fa";
import { VscFeedback } from "react-icons/vsc";
import { AiFillFlag, AiOutlineDownload } from "react-icons/ai";

const Summary = () => {
  return (
    <div>
      <h1 className="text-4xl font-extrabold text-center mt-10">
        Millions Business Trust Us
      </h1>
      <p className="text-2xl text-center text-primary mb-10">
        TRY TO UNDERSTAND USER EXPECTATION
      </p>
      <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 my-10 lg:pl-20 pl-10 py-10">
        <div className="w-64">
          <AiFillFlag  size={60}  />
          <h2 className="text-3xl text-primary font-bold">70</h2>
          <p className="text-secondary font-semibold">Countries</p>
        </div>
        <div>
          <FiPackage size={60} />
          <h2 className="text-3xl text-primary font-bold">300+</h2>
          <p className="text-secondary font-semibold">Complete Projects</p>
        </div>
        <div>
          <FaPeopleArrows size={60} />
          <h2 className="text-3xl text-primary font-bold">200+</h2>
          <p className="text-secondary font-semibold">Happy Clients</p>
        </div>
        <div>
          <AiOutlineDownload size={60} />
          <h2 className="text-3xl text-primary font-bold">500K+</h2>
          <p className="text-secondary font-semibold">Downloads</p>
        </div>
        <div>
          <VscFeedback size={60} />
          <h2 className="text-3xl text-primary font-bold">5k+</h2>
          <p className="text-secondary font-semibold">Feedback</p>
        </div>
      </div>
    </div>
  );
};

export default Summary;
