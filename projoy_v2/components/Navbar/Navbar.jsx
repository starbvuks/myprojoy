import React from "react";
import Link from "next/link";
import { ShoppingBagIcon as Cart } from "@heroicons/react/outline";

import Menu from "./Menu/MenuTemplate";

const Navbar = () => {
  return (
    <div className="flex justify-between pt-5">
      <Link href="/">
        <a>
          <img src="/logo.png" alt="dds" className="w-20 h-20 mx-3" />
        </a>
      </Link>
      <div className="flex items-center gap-4 mr-7">
        <Link href="/cart">
          <a>
            <Cart className="w-8 h-8 m-6" />
          </a>
        </Link>
        <Menu />
      </div>
    </div>
  );
};

export default Navbar;
