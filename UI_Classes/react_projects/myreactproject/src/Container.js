import React from "react";

export const Container = (props) => {
  return (
    <>
      <div className="container mt-5">
        <div className="row">
          <div className="col">{props.children}</div>
        </div>
      </div>
    </>
  );
};
