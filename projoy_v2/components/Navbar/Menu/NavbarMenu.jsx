import { useContext } from "react";
import { XCircleIcon as Exit } from "@heroicons/react/solid";
import { Transition } from "@headlessui/react";

import { MenuContext } from "../../../context/MenuContext";

const NavbarMenu = ({ isOpen, menuClick }) => {
  return (
    <Transition appear={true} show={isOpen}>
      <Transition.Child
        enter="transition ease-in-out duration-1000"
        enterFrom="translate-x-full"
        enterTo="translate-x-0"
      >
        <Exit className="text-yellow-100 w-1/6" onClick={() => menuClick()} />
        <div className="flex flex-col gap-y-4 mt-10 font-poppins font-bold text-xl text-yellow-100">
          <span>About</span>
          <span>Story</span>
          <span>Science</span>
        </div>
      </Transition.Child>
    </Transition>
  );
};

export default NavbarMenu;
