import React from "react";
import Header from "./Header";
import HeaderCart from "./HeaderCart";
import "./MainHeader.css";

function MainHeader() {
  return (
    <>
      <header className="flex">
        <Header />
        <HeaderCart />
      </header>
    </>
  );
}

export default MainHeader;
