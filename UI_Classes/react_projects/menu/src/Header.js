import React from "react";
import "./Header.css";

export const Header = ({ categories, filterItems }) => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg mt-4">
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto me-auto">
              {categories.map((val, index) => {
                return (
                  <li className="nav-item me-3" key={index}>
                    <button
                      type="button"
                      className="btn btn-outline-primary txt-transform"
                      onClick={() => filterItems(val)}
                    >
                      {val}
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};
