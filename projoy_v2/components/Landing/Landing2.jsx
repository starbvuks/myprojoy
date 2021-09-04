import React from "react";
import { ShoppingBagIcon as Cart } from "@heroicons/react/outline";

const Landing2 = () => {
  return (
    <div className="flex flex-col py-10 items-center overflow-hidden bg-green-500">
      <img src="/img/vanilla.png" alt="vanilla" className="rotate-45" />
      <div className="flex flex-col items-end font-moresugar text-5xl w-full justify-end pr-8 -mt-32">
        <span className="font-semibold">Vanilla</span>
        <span className="text-xl">300gms</span>
      </div>
      <div className="w-full flex justify-center mt-10">
        <button className="flex items-center bg-transparent gap-5 py-2.5 px-4 bg-green-300 rounded-lg z-20">
          <Cart className="w-6 h-6" />
          <span className="font-josefin font-medium text-xl mt-1">
            Add To Cart
          </span>
        </button>
      </div>
    </div>
  );
};

export default Landing2;
