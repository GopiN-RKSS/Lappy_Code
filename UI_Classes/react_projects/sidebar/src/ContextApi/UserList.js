import React, { useState, useContext } from "react";
import { User } from "./User";
import { userContext } from "./ContextProvider";

export const UserList = () => {
  const [users, setUsers] = useContext(userContext);
  return (
    <>
      {users.map((user, index) => (
        <div key={index}>
          <User name={user.name} age={user.age} />
        </div>
      ))}
    </>
  );
};
