import { useContext } from "react";
import { XCircleIcon as Exit } from "@heroicons/react/solid";
import { Transition } from "@headlessui/react";

import { MenuContext } from "../../../context/MenuContext";

const NavbarMenu = ({ isOpen, menuClick }) => {
  return (
    <Transition appear={true} show={isOpen}>
      <Transition.Child
        class="flex flex-col bg-yellow-700 fixed top-0 right-0 p-5 z-20 w-1/2 h-full transition ease-in-out duration-300"
        enter="transition-opacity ease-in-out duration-700"
        enterFrom="translate-x-full"
        enterTo="translate-x-0"
        leave="transition-opacity ease-out duration-700"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <Exit className="text-yellow-100 w-1/6" onClick={() => menuClick()} />
        <div className="flex flex-col gap-y-4 mt-10 font-poppins font-bold text-xl text-yellow-100">
          <span>About</span>
          <span>About</span>
          <span>About</span>
        </div>
      </Transition.Child>
    </Transition>
  );
};

export default NavbarMenu;
