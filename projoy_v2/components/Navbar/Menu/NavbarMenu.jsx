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
        <Exit className="text-darkBlue w-1/6" onClick={() => menuClick()} />
        <div className="flex flex-col divide-solid divide-y-2 gap-y-3 mt-10 font-poppins font-bold text-xl text-darkBlue">
          <span>About</span>
          <span className="pt-3">Story</span>
          <span className="pt-3">Science</span>
        </div>
      </Transition.Child>
    </Transition>
  );
};

export default NavbarMenu;
