import { useState } from "react";

const Landing = () => {
  return (
    <div className="w-full h-full">
      <div className="flex flex-col items-center justify-center font-josefin mt-5">
        <img src="/img/triopng.png" alt="trio" className="w-3/4 mr-10" />
        <div className="flex flex-col font-bold text-center text-yellow-200 text-5xl">
          <span>
            Easier Digestion
            <span className="font-semibold pl-2"></span>
          </span>
          <span className="pt-3">
            Stronger Immunity
            <span className="font-semibold pl-2"></span>
          </span>
        </div>
      </div>
      <div className="flex flex-col py-36 pr-10 font-josefin items-end text-primary">
        <span className="font-5xl text-6xl font-bold text-yellow-200">
          reduce
        </span>
        <div className="flex flex-col text-3xl justify-center leading-normal text-right font-poppins font-semibold">
          <span>acidity</span>
          <span>fatigue</span>
          <span>indegestion</span>
          <span>constipation</span>
        </div>
      </div>
    </div>
  );
};

export default Landing;
