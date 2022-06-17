import { createContext, useState, useContext } from "react";

export const AllUserContext = createContext({});

export function useAllUsers() {
  return useContext(AllUserContext);
}

export const AllUsersProvider = (props) => {
  const [allUsers, setAllUsers] = useState();
  return (
    <AllUserContext.Provider value={[allUsers, setAllUsers]}>
      {props.children}
    </AllUserContext.Provider>
  );
};
