import { useContext } from "react";
import { MenuAlt3Icon as Menu } from "@heroicons/react/solid";

import NavbarMenu from "./NavbarMenu";
import { MenuContext } from "../../../context/MenuContext";

const NavMenu = () => {
  const [isOpen, setIsOpen] = useContext(MenuContext);

  const menuClick = () => {
    setIsOpen((openState) => !openState);
  };

  return (
    <div>
      <Menu className="w-7 h-7 m-6" onClick={() => menuClick()} />
      {isOpen ? <NavbarMenu menuClick={menuClick} isOpen={isOpen} /> : null}
    </div>
  );
};

export default NavMenu;
