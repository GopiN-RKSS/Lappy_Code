import React, { useState } from "react";
import { auth } from "./firebase";

export const LoginPage = () => {
  const [state, setState] = useState({ email: "", password: "" });
  const { email, password } = state;

  const handleInput = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };
  const signUp = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((user) => console.log(user))
      .catch((error) => console.log(error));
  };
  const signIn = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div>
        <center>
          <form autoComplete="off">
            <h1>Authentication</h1>
            <input
              type="email"
              name="email"
              placeholder="email"
              value={email}
              onChange={handleInput}
            />{" "}
            <br />
            <br />
            <input
              type="password"
              name="password"
              value={password}
              placeholder="password"
              onChange={handleInput}
            />
            <br />
            <br />
            <button type="button" onClick={signIn}>
              sing In
            </button>
            &nbsp;&nbsp;
            <button type="button" onClick={signUp}>
              sign Up
            </button>
          </form>
        </center>
      </div>
    </>
  );
};
