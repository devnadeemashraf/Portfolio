import { MutableRefObject, createContext, useState } from "react";

import { TChildrenProps } from "@/types";

type NavigationContextState = {
  sidebarVisible: boolean;
  toggleSidebarVisiblity: () => void;
};

const initialState: NavigationContextState = {
  sidebarVisible: false,
  toggleSidebarVisiblity: () => {},
};

export const NavigationContext =
  createContext<NavigationContextState>(initialState);

export const NavigationContextProvider = ({ children }: TChildrenProps) => {
  const [value, setValue] = useState<boolean>(initialState.sidebarVisible);

  const toggleSidebarVisiblity = () => {
    switch (value) {
      case true: {
        setValue(false);
        break;
      }
      case false: {
        setValue(true);
        break;
      }
    }
  };

  return (
    <NavigationContext.Provider
      value={{
        sidebarVisible: value,
        toggleSidebarVisiblity: toggleSidebarVisiblity,
      }}
    >
      {children}
    </NavigationContext.Provider>
  );
};
