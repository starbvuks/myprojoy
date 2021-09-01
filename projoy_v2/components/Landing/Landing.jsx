import { useState } from "react";

const Landing = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center font-josefin mt-5">
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
  );
};

export default Landing;
