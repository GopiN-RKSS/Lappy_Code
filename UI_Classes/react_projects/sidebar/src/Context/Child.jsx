import React, { useContext, useState } from "react";
import { userContext } from "./Provider";

export const Child = () => {
  const [state, setstate] = useContext(userContext);
  const [theme, setTheme] = useState(state.dark.background);

  const change = () => {
    setTheme(state.light.background);
  };
  return (
    <div className="mt-5">
      <h1 className="text-white text-center" style={{ backgroundColor: theme }}>
        React JS Classes
      </h1>
      <div className="text-center mt-3">
        <button
          type="button"
          className="btn btn-outline-success"
          onClick={change}
        >
          Success
        </button>
      </div>
    </div>
  );
};
