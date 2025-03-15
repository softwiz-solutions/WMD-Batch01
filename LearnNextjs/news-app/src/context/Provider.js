"use client";
import { createContext, useContext, useState } from "react";

const Context = createContext(undefined);

export const Provider = ({ children }) => {
  
  const [user, setUser] = useState({
    name: "John Doe",
    email: "john.doe@example.com",
  });
  const [isUserLogined, setIsUserLogined] = useState(false);
  return (
    <Context.Provider
      value={{
        user,
        setUser,
        isUserLogined,
        setIsUserLogined,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useProviderContext = () => {
  return useContext(Context);
};
