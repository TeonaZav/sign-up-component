import React, { useState } from "react";
import { Button, VStack } from "@chakra-ui/react";
import { Form, Formik } from "formik";
import TextField from "./TextField";
import schema from "./ValidationSchema";
const SignUpForm = () => {
  const [errorM, setErrorM] = useState(null);
  return (
    <div className="form-main-ct">
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          password: "",
        }}
        validationSchema={schema}
        onSubmit={(values, actions) => {
          const vals = { ...values };
          actions.resetForm();
          fetch(`${process.env.REACT_APP_SERVER_URL}/auth/register`, {
            method: "POST",
            credentials: "include",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(vals),
          })
            .catch((err) => {
              return;
            })
            .then((res) => {
              if (!res || !res.ok || res.status >= 400) {
                return;
              }
              return res.json();
            })
            .then((data) => {
              if (!data) return;

              if (data.status) {
                setErrorM(data.status);
              } else if (data.loggedIn) {
              }
            });
        }}
      >
        <VStack as={Form} className="form-ct">
          <TextField
            name="firstName"
            placeholder="First Name"
            autoComplete="off"
            type="text"
          />
          <TextField
            name="lastName"
            placeholder="Last Name"
            autoComplete="off"
            type="text"
          />
          <TextField
            name="email"
            placeholder="Email address"
            autoComplete="off"
          />
          <TextField
            name="password"
            placeholder="Password"
            autoComplete="off"
            type="password"
          />

          <Button colorScheme="teal" type="submit" className="btn-sign-up">
            Sign Up
          </Button>
        </VStack>
      </Formik>
    </div>
  );
};
export default SignUpForm;
