import { useState } from "react";

const Landing = () => {
  return (
    <div className="flex flex-col items-center justify-center font-poppins mt-7">
      <img src="/img/triopng.png" alt="trio" className="w-3/4 mr-10" />
      <div className="flex flex-col font-extrabold text-brightOrange text-4xl mt-7">
        <span>
          Improve
          <span className="font-semibold pl-2 text-yellow-500">Digestion</span>
        </span>
        <span className="pt-4">
          Boost
          <span className="font-semibold pl-2 text-yellow-500">Immunity</span>
        </span>
      </div>
    </div>
  );
};

export default Landing;
