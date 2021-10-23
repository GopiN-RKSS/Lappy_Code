import React, { useEffect, useState } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { MyTextInput } from "./MyTextInput";

import "./SignUpForm.css";

export const SignUpForm = (props) => {
  const [form, setForm] = useState({});
  console.log(form);
  return (
    <>
      <Formik
        initialValues={{
          author: "",
          desc: "",
        }}
        validationSchema={Yup.object({
          author: Yup.string()
            .max(20, "Must be 20 characters or less")
            .required("Required"),
          desc: Yup.string()
            .max(20, "Must be 20 characters or less")
            .required("Required"),
        })}
        onSubmit={(values, { resetForm }) => {
          setForm(values);
          props.handler();
          setForm("");
          resetForm(values);
        }}
      >
        <Form>
          <div className="mt-5">
            <table className="mx-auto">
              <tbody>
                <tr>
                  <td>Name:</td>
                  <td>
                    <MyTextInput name="author" type="text" />
                  </td>
                </tr>
                <tr>
                  <td>Text:</td>
                  <td>
                    <MyTextInput name="desc" type="text" />
                  </td>
                </tr>
                <tr>
                  <td></td>
                  <td className="text-center">
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
