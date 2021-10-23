import React from "react";
import { Link } from "react-router-dom";

export const MainNavigation = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-info">
      <ul className="navbar-nav mx-auto">
        <li className="nav-item me-3">
          <Link to="/quotes" className="nav-link active">
            All Quotes
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/new-quote" className="nav-link">
            Add a Quote
          </Link>
        </li>
      </ul>
    </nav>
  );
};
