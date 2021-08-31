import { useState } from "react";
import { MenuAlt3Icon as Menu } from "@heroicons/react/solid";

import NavbarMenu from "./NavbarMenu";

const NavMenu = () => {
  const [isOpen, setIsOpen] = useState();

  const menuClick = () => {
    setIsOpen((openState) => !openState);
  };

  return (
    <div>
      <Menu className="w-7 h-7 m-6" onClick={() => menuClick()} />
      {isOpen ? <NavbarMenu /> : null}
    </div>
  );
};

export default NavMenu;
