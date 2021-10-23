import React, { useState } from "react";
import MenuIcon from "@material-ui/icons/Menu";
import "./Sidebar.css";
import CloseIcon from "@material-ui/icons/Close";

export const Sidebar = ({ data }) => {
  const [state, setstate] = useState(false);
  return (
    <>
      <div className="container-fluid" onClick={() => setstate(true)}>
        <MenuIcon />
      </div>
      {state ? (
        <div className="sidebar">
          <span className="fl-right" onClick={() => setstate(false)}>
            <CloseIcon />
          </span>
          {data.map((val, index) => (
            <div key={index}>{val}</div>
          ))}
        </div>
      ) : null}
    </>
  );
};
