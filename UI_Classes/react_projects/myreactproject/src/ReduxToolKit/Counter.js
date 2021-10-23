import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { counterActions } from "./reducer/reducer";

export const CounterFun = () => {
  const counter = useSelector((state) => state.counter.counter);
  const dispatch = useDispatch();

  const increment = () => {
    dispatch(counterActions.increment());
  };
  const decrement = () => {
    dispatch(counterActions.decrement());
  };
  const increase = () => {
    dispatch(counterActions.increase(10));
  };
  return (
    <>
      <div className="text-center mt-5">
        <div>{counter}</div>
        <div>
          <button onClick={increment}>Increment</button>
          <button onClick={decrement}>Decrement</button>
          <button onClick={increase}>Increase</button>
        </div>
      </div>
    </>
  );
};
