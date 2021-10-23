import React, { createContext, useState } from "react";
import { data } from "./data";

export const userContext = createContext();

export const ContextProvider = (props) => {
  const [state, setState] = useState(data);

  return (
    <userContext.Provider value={[state, setState]}>
      {props.children}
    </userContext.Provider>
  );
};
