import React from "react";
import { Formik } from "formik";
import { Button, Form, Label } from "semantic-ui-react";
import { useHistory } from "react-router-dom";
import * as Yup from "yup";
import "semantic-ui-css/semantic.min.css";

function Signup(props) {
  const { submitformData } = props;
  const history = useHistory();

  const loginSchema = Yup.object().shape({
    firstname: Yup.string()
      .required("First name is required")
      .min(3, "Minimum 3 characters long")
      .trim(),
    lastname: Yup.string()
      .required("Last name is required")
      .min(3, "Minimum 3 characters long")
      .trim(),
    email: Yup.string()
      .required("Email is required")
      .email("invalid email")
      .trim(),
    password: Yup.string()
      .required("Password is required")
      .min(4, "Minimum 4 characters long")
      .trim(),
    passwordConfirmation: Yup.string()
      .required("Password cannot be empty")
      .oneOf([Yup.ref("password"), null], "Passwords must match"),
  });

  return (
    <>
      <div>
        <Formik
          initialValues={{
            firstname: "",
            lastname: "",
            email: "",
            password: "",
            passwordConfirmation: "",
          }}
          validationSchema={loginSchema}
          onSubmit={(data) => {
            submitformData(data);
            history.push("/login");
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
          }) => (
            <Form onSubmit={handleSubmit}>
              <Form.Field>
                <label>First Name</label>
                <input
                  type="text"
                  name="firstname"
                  placeholder="first Name...."
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.firstname}
                />

                {errors.firstname && touched.firstname && (
                  <Label basic color="red" pointing>
                    {errors.firstname}
                  </Label>
                )}
              </Form.Field>

              <Form.Field>
                <label>Last Name</label>
                <input
                  type="text"
                  name="lastname"
                  placeholder="Last Name...."
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.lastname}
                />

                {errors.lastname && touched.lastname && (
                  <Label basic color="red" pointing>
                    {errors.lastname}
                  </Label>
                )}
              </Form.Field>

              <Form.Field>
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Email...."
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                />

                {errors.email && touched.email && (
                  <Label basic color="red" pointing>
                    {errors.email}
                  </Label>
                )}
              </Form.Field>

              <Form.Field>
                <label>Password</label>
                <input
                  type="password"
                  name="password"
                  placeholder="Password...."
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                />

                {errors.password && touched.password && (
                  <Label basic color="red" pointing>
                    {errors.password}
                  </Label>
                )}
              </Form.Field>

              <Form.Field>
                <label>Confirm Password</label>
                <input
                  type="password"
                  name="passwordConfirmation"
                  placeholder="Confirm Password...."
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.passwordConfirmation}
                />
                {errors.passwordConfirmation && touched.passwordConfirmation && (
                  <Label basic color="red" pointing>
                    {errors.passwordConfirmation}
                  </Label>
                )}
              </Form.Field>

              <Button color="black" type="submit" disabled={isSubmitting}>
                submit  
              </Button>
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
}

export default Signup;
