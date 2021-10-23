import React, { useState } from "react";
//import ReactDOM from "react-dom";
import { Formik, Form, useField } from "formik";
import * as Yup from "yup";
import "./Post.css";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import CommentIcon from "@material-ui/icons/Comment";
import ShareRoundedIcon from "@material-ui/icons/ShareRounded";

const MyTextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <input className="text-input" {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  );
};

// And now we can use these
export const SignupForm = () => {
  const [state, setstate] = useState([]);
  const [incr, setIncr] = useState(0);
  const increment = () => {
    setIncr(() => incr + 1);
  };
  return (
    <>
      <Formik
        initialValues={{
          userName: "",
          msg: "",
        }}
        validationSchema={Yup.object({
          userName: Yup.string()
            .max(15, "Must be 15 characters or less")
            .required("Required"),
          msg: Yup.string()
            .max(30, "Must be 15 characters or less")
            .required("Required"),
        })}
        onSubmit={(values) => {
          setstate(() => [...state, values]);
        }}
      >
        <Form>
          <div className="container mt-5">
            <div className="row">
              <div className="col">
                <MyTextInput
                  className="text-center border border-2 w-100 border-dark border-r"
                  name="userName"
                  type="text"
                  placeholder="userName"
                />
              </div>
            </div>
            <div className="row mt-3">
              <div className="col">
                <MyTextInput
                  className="text-center border border-2 w-100 border-dark border-r"
                  name="msg"
                  as="text-area"
                  placeholder="Type your message"
                />
              </div>
            </div>
            <div className="row mt-3 mb-3">
              <div className="col text-center">
                <button type="submit" class="btn btn-outline-secondary">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </Form>
      </Formik>
      <div className="underline"></div>
      <div className="container mt-5">
        <div className="row g-5 row-cols-1 row-cols-lg-1">
          {state.map((val, index) => (
            <div className="col" key={index}>
              <div className="border border-2 w-100 border-dark border-sqr">
                <div class="card">
                  <div className="d-flex">
                    <div className="me-2">
                      <AccountCircleIcon />
                    </div>
                    <div className="">{val.userName}</div>
                  </div>
                  <div className="ms-2 mt-3">{val.msg}</div>
                  <div class="card-body d-flex" onClick={increment}>
                    <div>
                      {incr}
                      <ThumbUpAltIcon />
                    </div>
                    <div className="ms-3">
                      <CommentIcon />
                    </div>
                    <div className="ms-3">
                      <ShareRoundedIcon />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
