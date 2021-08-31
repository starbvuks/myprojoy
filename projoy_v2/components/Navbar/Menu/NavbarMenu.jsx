import React from "react";
import { XCircleIcon as Exit } from "@heroicons/react/solid";

const NavbarMenu = () => {
  return (
    <div class="flex flex-col bg-yellow-700 fixed top-0 right-0 p-5 z-20 w-1/2 h-full">
      <Exit className="text-yellow-100 w-1/6" />
      <div className="flex flex-col gap-y-4 mt-10 font-poppins font-bold text-xl text-yellow-100">
        <span>About</span>
        <span>About</span>
        <span>About</span>
      </div>
    </div>
  );
};

export default NavbarMenu;
