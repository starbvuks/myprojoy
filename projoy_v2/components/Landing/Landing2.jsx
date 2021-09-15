import React from "react";
import { ShoppingBagIcon as Cart } from "@heroicons/react/outline";

const Landing2 = () => {
  const products = [
    {
      name: "Vanilla",
      img: "/img/vanilla.png",
      color: "#ecfdf5",
      textcolor: "#d1fae5",
    },
    {
      name: "Chocolate",
      img: "/img/chocolate.png",
      color: "#fef2f2",
      textcolor: "#fecaca",
    },
    {
      name: "Zero Sugar",
      img: "/img/zerosug.png",
      color: "#eff6ff",
      textcolor: "#dbeafe",
    },
  ];

  return (
    <div>
      {products.map((product, index) => (
        <div
          key={index}
          className="flex flex-col py-10 items-center overflow-hidden"
          style={{
            background: `radial-gradient(circle, ${product.color} 20%, rgba(242,242,242,1) 90%)`,
          }}
        >
          <img src={product.img} alt="vanilla" className="rotate-45" />
          <div className="flex flex-col items-end font-moresugar text-4xl w-full justify-end pr-8 -mt-32">
            <span className="font-semibold">{product.name}</span>
            <span className="text-xl">300gms</span>
          </div>
          <div className="w-full flex justify-center mt-10">
            <button
              className="flex items-center bg-transparent gap-5 py-2.5 px-4 rounded-lg z-20"
              style={{ backgroundColor: product.textcolor }}
            >
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
