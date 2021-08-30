import React from "react";
import { MenuAlt3Icon as Menu } from "@heroicons/react/solid";

const Navbar = () => {
  return (
    <div class="flex">
      <span>Projoy</span>
      <Menu class="w-5 h-5" />
    </div>
  );
};

export default Navbar;
