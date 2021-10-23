import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export const TodoItems = () => {
  const todoItem = useSelector((state) => state.itemsList);
  const dispatch = useDispatch();
  const [name, setName] = useState("");

  const addName = (e) => {
    setName(e.target.value);
  };
  const addItem = (e) => {
    e.preventDefault();
    dispatch({ type: "addTodo", name: name });
    setName("");
  };

  return (
    <div className="text-center">
      <input type="text" value={name} onChange={addName} />
      <button type="submit" onClick={addItem}>
        Add
      </button>

      {todoItem
        ? todoItem.map((val, index) => <div key={index}>{val}</div>)
        : null}
    </div>
  );
};
