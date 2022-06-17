import { createContext, useState, useContext } from "react";

export const DrawerContext = createContext();

export function useDrawer() {
  return useContext(DrawerContext);
}

export const DrawerProvider = (props) => {
  const [drawer, setDrawer] = useState("edit");
  return (
    <DrawerContext.Provider value={[drawer, setDrawer]}>
      {props.children}
    </DrawerContext.Provider>
  );
};
