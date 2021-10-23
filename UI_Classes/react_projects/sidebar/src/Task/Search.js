import React, { useContext } from "react";
import "./Search.css";
import { SignUpForm } from "../forms/SignUpForm";
import { userContext } from "../ContextApi/ContextProvider";

export const Search = () => {
  const [state, setState] = useContext(userContext);

  const searchCourse = (e) => {
    let res = state.filter((val, index) => {
      if (e.target.value === "") {
        return state;
      } else if (
        val.course.toLowerCase().includes(e.target.value.toLowerCase())
      ) {
        return val;
      }
    });
    setState(res);
  };
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">
            <form className="d-flex">
              <input
                className="form-control me-2 w-50"
                type="search"
                placeholder="Enter Course Name"
                aria-label="Search"
                onChange={searchCourse}
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
          <div className="col">
            <div className="float">
              <button
                type="button"
                className="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                Add New Course
              </button>

              <div
                className="modal fade"
                id="exampleModal"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title" id="exampleModalLabel">
                        Add Course
                      </h5>
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div className="modal-body">
                      <SignUpForm />
                    </div>
                    <div className="modal-footer">
                      <button
                        type="button"
                        className="btn btn-secondary"
                        data-bs-dismiss="modal"
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
