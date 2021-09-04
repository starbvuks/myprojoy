import React from "react";
import { ShoppingBagIcon as Cart } from "@heroicons/react/outline";

const Landing2 = () => {
  const products = [
    {
      name: "Vanilla",
      img: "/img/vanilla.png",
    },
    {
      name: "Chocolate",
      img: "/img/chocolate.png",
    },
    {
      name: "Zero Sugar",
      img: "/img/zerosug.png",
    },
  ];

  return (
    <div>
      {products.map((product, index) => (
        <div className="flex flex-col py-10 items-center overflow-hidden bg-green-500">
          <img src={product.img} alt="vanilla" className="rotate-45" />
          <div className="flex flex-col items-end font-moresugar text-4xl w-full justify-end pr-8 -mt-32">
            <span className="font-semibold">{product.name}</span>
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
      ))}
    </div>
  );
};

export default Landing2;
