import { useContext } from "react";
import { MenuAlt3Icon as Menu } from "@heroicons/react/solid";
import { Transition } from "@headlessui/react";

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
      <Transition
        show={isOpen}
        class="flex flex-col bg-yellow-700 fixed top-0 right-0 p-5 z-20 w-1/2 h-full transition ease-in-out duration-300"
        enter="transition ease-in-out duration-700"
        enterFrom="translate-x-full"
        enterTo="translate-x-0"
        leave="transition ease-out duration-700"
        leaveFrom="translate-x-0"
        leaveTo="translate-x-full"
      >
        {isOpen ? <NavbarMenu menuClick={menuClick} isOpen={isOpen} /> : null}
      </Transition>
    </div>
  );
};

export default NavMenu;
