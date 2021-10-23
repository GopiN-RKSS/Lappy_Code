import React, { useState, useEffect, useContext } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { MyTextInput } from "./MyTextInput";
import { MySelect } from "./MySelect";
import { MyCheckbox } from "./MyCheckbox";
import { userContext } from "../ContextApi/ContextProvider";
import "./SignUpForm.css";

export const SignUpForm = (props) => {
  const [state, setState] = useContext(userContext);
  const [form, setForm] = useState({});

  useEffect(() => {
    if (Object.keys(form).length) {
      setState((prevState) => [...prevState, form]);
    }
  }, [form]);

  return (
    <>
      <Formik
        initialValues={{
          course: "",
          authors: "",
          duration: "",
          created: "", // added for our select
          desc: "",
        }}
        validationSchema={Yup.object({
          course: Yup.string()
            .max(15, "Must be 15 characters or less")
            .required("Required"),
          authors: Yup.string()
            .max(20, "Must be 20 characters or less")
            .required("Required"),
          duration: Yup.string()
            .max(20, "Must be 20 characters or less")
            .required("Required"),

          created: Yup.string()
            .max(20, "Must be 20 characters or less")
            .required("Required"),
        })}
        onSubmit={(values, { resetForm }) => {
          setForm(values);
          setForm("");
          alert("submitted successfully");
          resetForm(values);
        }}
      >
        <Form>
          <div className="">
            <table>
              <tbody>
                <tr>
                  <td>Course Name:</td>
                  <td>
                    <MyTextInput name="course" type="text" />
                  </td>
                </tr>
                <tr>
                  <td>Authors:</td>
                  <td>
                    <MyTextInput name="authors" type="text" />
                  </td>
                </tr>
                <tr>
                  <td>Duration:</td>
                  <td>
                    <MyTextInput name="duration" type="text" />
                  </td>
                </tr>
                <tr>
                  <td>Created:</td>
                  <td>
                    <MyTextInput name="created" type="text" />
                  </td>
                </tr>
                <tr>
                  <td>Description:</td>
                  <td>
                    <MyTextInput name="desc" type="text" />
                  </td>
                </tr>
                <tr>
                  <td></td>
                  <td>
                    <button type="submit" className="btn btn-outline-success">
                      Submit
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </Form>
      </Formik>
    </>
  );
};
