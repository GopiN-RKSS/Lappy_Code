import React, { useState } from "react";
import logo from "./logo.svg";
import "./Header.css";
import { Container } from "./Container";
//import { Home } from "./Home";
//import { About } from "./About";
//import { Services } from "./Services";
//import { Contact } from "./Contact";
//import { HomeComp } from "./HomeComp";
import TodoListFunComp from "./TodoListFunComp";
import { Api } from "./Api";
import { Movies } from "./Movies/MoviePage";
import { data } from "./Movies/MoviesData";
import { SignUpForm } from "./forms/SignUpForm";

const Header = ({ menu }) => {
  const [state, setState] = useState("Home");

  const onClickHandler = (e) => {
    e.preventDefault();
    if (e.target.getAttribute("name") === "Home") {
      setState("Home");
    }

    if (e.target.getAttribute("name") === "About") {
      setState("About");
    }

    if (e.target.getAttribute("name") === "Services") {
      setState("Services");
    }

    if (e.target.getAttribute("name") === "Contact") {
      setState("Contact");
    }
  };
  let button;
  if (state === "Home") {
    button = <SignUpForm />;
  } else if (state === "About") {
    button = <TodoListFunComp />;
  } else if (state === "Services") {
    button = <Api />;
  } else {
    button = <Movies data={data} />;
  }
  return (
    <>
      <div className="grid-container">
        <div className="logo">
          <img src={logo} alt="logo" height="40px" />
        </div>
        <div className="menu-items">
          {menu.map((val, index) => (
            <li key={index}>
              <a
                name={val.item}
                onClick={onClickHandler}
                className="nav-link active"
                aria-current="page"
                href="some"
              >
                {val.item}
              </a>
            </li>
          ))}
        </div>
      </div>
      <Container>{button}</Container>
    </>
  );
};

export default Header;
