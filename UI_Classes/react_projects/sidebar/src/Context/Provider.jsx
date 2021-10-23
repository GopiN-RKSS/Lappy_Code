import React, { createContext, useState } from "react";
import { Parent } from "./Parent";

export const themes = {
  light: {
    background: "pink",
  },
  dark: {
    background: "#222222",
  },
};

export const userContext = createContext();

export const Provider = () => {
  const [state, setstate] = useState(themes);
  return (
    <userContext.Provider value={[state, setstate]}>
      <Parent />
    </userContext.Provider>
  );
};
