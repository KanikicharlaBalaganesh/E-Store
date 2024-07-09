import React, { createContext, useContext, useState } from "react";

const MenuContext = createContext();

export const useMenuContext = () => {
  return useContext(MenuContext);
};

export const MenuProvider = ({ children }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <MenuContext.Provider value={{ menuOpen, setMenuOpen }}>
      {children}
    </MenuContext.Provider>
  );
};
