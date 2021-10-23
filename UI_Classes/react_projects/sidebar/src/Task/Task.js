import React, { useState, useContext, useEffect } from "react";
import { userContext } from "../ContextApi/ContextProvider";

export const Task = () => {
  const [state, setState] = useContext(userContext);

  localStorage.setItem("data", JSON.stringify(state));
  const [newdata, setNewData] = useState(
    JSON.parse(localStorage.getItem("data"))
  );
  console.log(newdata);

  return (
    <>
      <div className="container">
        {state.map((val, index) => (
          <div
            className="row g-2 row-cols row-cols-lg-2 border border-2 border-primary mt-3 p-4"
            key={index}
          >
            <div className="col-md-8">
              <div className="course">
                <h3>{val.course}</h3>
              </div>
              <div className="desc">
                <p>{val.desc}</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="authors">
                <h5>
                  Authors:{val.authors}
                  {/* {val.authors
                    .map((name, id) => (
                      <span className="ms-1" key={id}>
                        {name}
                      </span>
                    ))
                    .reduce((prev, curr) => [prev, ",", curr])} */}
                </h5>
              </div>
              <div className="duration">
                <h5>
                  Duration:<span className="ms-2">{val.duration}</span>
                </h5>
              </div>
              <div className="Created">
                <h5>
                  Created:<span className="ms-2">{val.created}</span>
                </h5>
              </div>
              <div className="text-center">
                <button
                  type="button"
                  className="text-center btn btn-outline-success"
                >
                  Show Course
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* <SignUpForm updateData={updateData} /> */}
    </>
  );
};
