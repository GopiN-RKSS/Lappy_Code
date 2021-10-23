import React from "react";
import { useHistory } from "react-router-dom";
import { SignUpForm } from "../forms/SignUpForm";

export const NewQuote = () => {
  const history = useHistory();
  const addHandler = () => {
    history.push("/quotes");
  };
  return (
    <div>
      <SignUpForm handler={addHandler} />
    </div>
  );
};
