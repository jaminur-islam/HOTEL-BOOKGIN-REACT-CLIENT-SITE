import React, { createContext } from "react";
import useFirebase from "../Hooks/useFirebase";

export const Mycontext = createContext();

const ContextProvider = ({ children }) => {
  const allcontext = useFirebase();
  return <Mycontext.Provider value={allcontext}>{children}</Mycontext.Provider>;
};

export default ContextProvider;
