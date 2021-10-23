import React, { useState } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { MyTextInput } from "./MyTextInput";
import { MySelect } from "./MySelect";
import { MyCheckbox } from "./MyCheckbox";

export const SignUpForm = () => {
  const [state, setState] = useState([]);
  //const [items, setItems] = useState();
  console.log(state);
  return (
    <>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          acceptedTerms: false, // added for our checkbox
          jobType: "", // added for our select
          gender: "",
        }}
        validationSchema={Yup.object({
          firstName: Yup.string()
            .max(15, "Must be 15 characters or less")
            .required("Required"),
          lastName: Yup.string()
            .max(20, "Must be 20 characters or less")
            .required("Required"),
          email: Yup.string()
            .email("Invalid email address")
            .required("Required"),
          acceptedTerms: Yup.boolean()
            .required("Required")
            .oneOf([true], "You must accept the terms and conditions."),
          jobType: Yup.string()
            .oneOf(
              ["designer", "development", "product", "other"],
              "Invalid Job Type"
            )
            .required("Required"),
        })}
        onSubmit={(values) => {
          console.log(values);
          setState(() => [...state, values]);
        }}
      >
        <Form>
          <div className="text-center">
            <div className="row mb-3">
              <div className="col">
                <MyTextInput
                  label="First Name:"
                  name="firstName"
                  type="text"
                  placeholder="Jane"
                />
              </div>
            </div>
            <div className="row mb-3">
              <div className="col">
                <MyTextInput
                  label="Last Name:"
                  name="lastName"
                  type="text"
                  placeholder="Doe"
                />
              </div>
            </div>
            <div className="row mb-3">
              <div className="col">
                <div role="group" aria-labelledby="my-radio-group">
                  <label className="me-2">
                    <MyTextInput
                      label="Gender:"
                      type="radio"
                      name="gender"
                      value="Male"
                    />
                    Male
                  </label>
                  <label>
                    <MyTextInput type="radio" name="gender" value="Female" />
                    Female
                  </label>
                </div>
              </div>
            </div>
            <div className="row mb-3">
              <div className="col">
                <MyTextInput
                  label="Email:"
                  name="email"
                  type="email"
                  placeholder="jane@formik.com"
                />
              </div>
            </div>

            <div className="row mb-3">
              <div className="col">
                <MySelect label="Job Type:" name="jobType">
                  <option value="">Select a job type</option>
                  <option value="designer">Designer</option>
                  <option value="development">Developer</option>
                  <option value="product">Product Manager</option>
                  <option value="other">Other</option>
                </MySelect>
              </div>
            </div>

            <div className="row mb-3">
              <div className="col">
                <MyCheckbox name="acceptedTerms">
                  I accept the terms and conditions
                </MyCheckbox>
              </div>
            </div>

            <div className="row mb-3">
              <div className="col">
                <button type="submit">Submit</button>
              </div>
            </div>
          </div>
        </Form>
      </Formik>
      {state.map((val, index) => (
        <div key={index}>
          <li>{val.firstName}</li>
          <li>{val.lastName}</li>
          <li>{val.gender}</li>
          <li>{val.email}</li>
          <li>{val.jobType}</li>
        </div>
      ))}
    </>
  );
};
