import React from "react";
import { MenuAlt3Icon as Menu } from "@heroicons/react/solid";
import { ShoppingBagIcon as Cart } from "@heroicons/react/outline";

const Navbar = () => {
  return (
    <div className="flex justify-between font-moresugar h-1/3">
      <Cart className="w-7 h-7 m-6" />
      <div className="flex flex-col items-center justify-center bg-yellow-500 w-1/2 h-5/12 rounded-b-2xl">
        <img src="/logo.svg" alt="dds" class="w-1/2" />
        <span className="font-regular pt-7 text-2xl text-yellow-200">for</span>
        <span className="font-medium text-2xl text-yellow-200">
          a healthy gut
        </span>
      </div>
      <Menu className="w-7 h-7 m-6" />
    </div>
  );
};

export default Navbar;