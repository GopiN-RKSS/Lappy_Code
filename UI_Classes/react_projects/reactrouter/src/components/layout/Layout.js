import React from "react";
import { MainNavigation } from "./MainNavigation";

export const Layout = (props) => {
  return (
    <>
      <MainNavigation />
      <div>{props.children}</div>
    </>
  );
};
