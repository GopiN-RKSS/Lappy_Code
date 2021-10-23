import React from "react";

export const LiftingStateUp = (props) => {
  return (
    <div className="text-center mt-5">
      <h3>{props.counter}</h3>
      <button
        type="button"
        className="btn btn-outline-primary me-3"
        onClick={props.increment}
      >
        Increment
      </button>
      <button
        type="button"
        className="btn btn-outline-secondary"
        onClick={props.decrement}
      >
        Decrement
      </button>
    </div>
  );
};
