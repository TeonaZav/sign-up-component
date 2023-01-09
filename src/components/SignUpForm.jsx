import React, { useState } from "react";
import { Button, VStack } from "@chakra-ui/react";
import { Form, Formik } from "formik";
import TextField from "./TextField";
import schema from "./ValidationSchema";
import styled from "styled-components";
const SignUpForm = () => {
  const [errorM, setErrorM] = useState(null);
  return (
    <Wrapper>
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
              Claim your free trial
            </Button>
          </VStack>
        </Formik>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  .form-main-ct {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    width: 100vw;
    .form-ct {
      width: 32.7rem;
      height: 44.2rem;
      border-radius: 1rem;
      background-color: #ffffff;
      box-shadow: 0px 8px 0px rgba(0, 0, 0, 0.14688);
      padding: 2.4rem;

      .btn-sign-up {
        width: 100%;
        height: 5.6rem;
        color: #ffffff;
        background-color: #38cc8b;
        cursor: pointer;
        box-shadow: inset 0px -4px 0px rgba(0, 0, 0, 0.0908818);
        border-radius: 0.5rem;
        border: none;
        &:hover {
          color: #ffffff;
          background-color: #77e2b3;
        }
        &:focus {
          outline: none;
          font-size: 1.5rem;
          border-radius: 0.6rem;
          text-align: center;
        }
        &:active {
          margin-bottom: 0.01rem;
        }
      }
    }
  }

  @media (min-width: 48em) {
    .form-main-ct {
      .form-ct {
      }
    }
  }
  @media (min-width: 90em) {
    .form-main-ct {
      .form-ct {
        width: 54rem;
        height: 47.4rem;
        .btn-sign-up {
          width: 46rem;
        }
      }
    }
  }
`;
export default SignUpForm;
