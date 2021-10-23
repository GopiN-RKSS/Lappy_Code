import React, { useContext } from "react";
import { userContext } from "./ContextProvider";

export const Nav = () => {
  const [users, setUsers] = useContext(userContext);
  return (
    <>
      <h1>{users.length}</h1>
    </>
  );
};
