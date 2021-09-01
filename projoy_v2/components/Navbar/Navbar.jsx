import React from "react";
import Menu from "./Menu/MenuTemplate";
import { ShoppingBagIcon as Cart } from "@heroicons/react/outline";

const Navbar = () => {
  return (
    <div className="flex justify-between pt-5">
      <img src="/logo.png" alt="dds" class="w-20 h-20 mx-3" />
      <div className="flex items-center gap-4 mr-7">
        <Cart className="w-8 h-8 m-6" />
        <Menu />
      </div>
    </div>
  );
};

export default Navbar;
