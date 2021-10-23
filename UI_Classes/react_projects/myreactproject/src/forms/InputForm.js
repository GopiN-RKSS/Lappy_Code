import React, { useState } from "react";

export const InputForm = () => {
  const [state, setState] = useState("");
  const [data, setData] = useState([]);
  const add = (e) => {
    setState(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    setData((val) => {
      return state ? [...val, state] : data;
    });
    setState("");
  };
  return (
    <>
      <form>
        <div>
          <input type="text" name="userName" onChange={add} />
          <input type="submit" onClick={submitHandler} />
        </div>
      </form>
      <div className="row mt-5">
        {data.map((val, index) => (
          <li key={index}>{val}</li>
        ))}
      </div>
    </>
  );
};
