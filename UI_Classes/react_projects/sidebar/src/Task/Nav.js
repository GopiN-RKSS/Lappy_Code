import React from "react";
import logo from "../logo.svg";
import "./Search.css";
import { Link } from "react-router-dom";

export const Nav = () => {
  return (
    <>
      <div className="container">
        <div className="row border border-2 border-dark mt-3 p-3">
          <div className="col">
            <img src={logo} alt="logo" height="40" />
          </div>

          <div className="col">
            <div className="float d-flex">
              <h4>Dev</h4>
              <button type="button" className="ms-3 btn btn-outline-dark">
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
