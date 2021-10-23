import React from "react";
import { Link } from "react-router-dom";

export const Nav = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light mb-5">
        <ul className="navbar-nav">
          <Link to="/">
            <li className="me-2 nav-item">Home</li>
          </Link>

          <Link to="/about">
            <li className="me-2 nav-item">About</li>
          </Link>

          <Link to="/services">
            <li className="me-2 nav-item">Services</li>
          </Link>

          <Link to="/contact">
            <li className="me-2 nav-item">Contact</li>
          </Link>
        </ul>
      </nav>
    </>
  );
};
