import { createContext, useState } from "react";

const MenuContext = createContext();

const MenuProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState();

  return (
    <MenuContext.Provider value={[ isOpen, setIsOpen ]}>
      {children}
    </MenuContext.Provider>
  );
};

export { MenuProvider, MenuContext };
