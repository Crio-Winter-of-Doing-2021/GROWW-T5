import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import TextField from "@material-ui/core/TextField";
import { useFormik } from "formik";
import * as yup from "yup";
import * as actions from "../../redux/action";
import Button from "@material-ui/core/Button";
import { connect } from "react-redux";

function Login({ setlogin, setIsUSerLogged, onClose }) {
  const validationSchema = yup.object({
    email: yup
      .string("Enter your email")
      .email("Enter a valid email")
      .required("Email is required"),
    password: yup
      .string("Enter your password")
      .min(8, "Password should be of minimum 8 characters length")
      .required("Password is required"),
  });

  const formik = useFormik({
    initialValues: {
      email: "foobar@example.com",
      password: "foobar",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      // alert(JSON.stringify(values, null, 2));
      console.log("email->", values.email);
      console.log("password->", values.password);
      setIsUSerLogged((prev) => !prev);
      onClose((prev) => !prev);
      // this.props.onAuth(values.email,values.password);
    },
  });

  return (
    <LoginContainer>
      <LoginHeader>Welcome to Groww</LoginHeader>

      <InputContainer>
        <form onSubmit={formik.handleSubmit} autocomplete="off">
          <TextField
            fullWidth
            id="email"
            name="email"
            label="Your Email Address"
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />
          <TextField
            fullWidth
            id="password"
            name="password"
            label="Enter Password"
            type="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
          />
          <Button color="primary" variant="contained" fullWidth type="submit">
            Submit
          </Button>
        </form>
      </InputContainer>
      {/* <SubmitButton>Submit</SubmitButton> */}
      <SignupLinkContainer>
        New here? Click here to{" "}
        <SignupLink onClick={() => setlogin((prev) => !prev)}>
          create an account
        </SignupLink>
      </SignupLinkContainer>
    </LoginContainer>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    onAuth: (email, password) => dispatch(actions.auth(email, password)),
  };
};

export default Login;
// export default connect(null,mapDispatchToProps)(Login);

const LoginContainer = styled.div`
  width: 450px;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 475px;
`;

const LoginHeader = styled.h1`
  margin-top: 54px;
  margin-bottom: 40px;
  letter-spacing: 0.3px;
  font-size: 36px;
  font-weight: 600;
  color: #44475b;
`;

const InputContainer = styled.div`
  width: 80%;
`;

const EmailInput = styled.div`
  width: 100%;
  margin-bottom: 30px;

  input {
    width: 97%;
    height: 30px;
    font-size: 17px;
  }
`;

const PasswordInput = styled.div`
  width: 100%;
  margin-bottom: 30px;

  input {
    width: 97%;
    height: 30px;
    font-size: 17px;
  }
`;

const SubmitButton = styled.button`
  height: 42px;
  width: 80%;
  color: white;
  background-color: #00d09c;
  border: none;
  border-radius: 5px;
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
  outline: none;
`;

const SignupLink = styled.span`
  cursor: pointer;
  font-weight: 800;

  :hover {
    color: #00d09c;
    text-decoration: underline;
  }
`;

const SignupLinkContainer = styled.div`
  margin-top: 9px;
`;