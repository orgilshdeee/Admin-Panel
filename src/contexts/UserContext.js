import { createContext, useState, useContext, useEffect } from "react";

export const UserContext = createContext({});

export function useUser() {
  return useContext(UserContext);
}

export const UserProvider = (props) => {
  const [user, setUser] = useState();
  useEffect(() => {
    if (localStorage.getItem("user")) {
      const data = JSON.parse(localStorage.getItem("user"));
      console.log(data);
      setUser({
        name: data.name,
        email: data.email,
        address: data.address,
        token: data.token,
        phone: data.phone,
      });
    }
  }, []);
  useEffect(() => {
    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
    } else {
      localStorage.removeItem("user");
    }
  }, [user]);
  return (
    <UserContext.Provider value={[user, setUser]}>
      {props.children}
    </UserContext.Provider>
  );
};
