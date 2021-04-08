import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Modal } from "react-responsive-modal";
import Chips from "react-chips";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { useFormik } from "formik";
import * as yup from "yup";

import { connect } from "react-redux";
import Button from "@material-ui/core/Button";

function Admin() {
  // const [faqs, setfaqs] = useState([]);

  const [open, setOpen] = useState(false);
  const [chips, setChips] = useState([]);
  const [ques, setQues] = useState("");
  const [login, setlogin] = useState(true);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  const validationSchema = yup.object({
    name: yup.string("Enter your name").required("Name is required"),
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
      name: "foo",
      email: "foobar@example.com",
      password: "foobar",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      setlogin((prev) => !prev);
      // onClose((prev) => !prev);
      // alert(JSON.stringify(values, null, 2));
    },
  });

  const faqs = [
    {
      id: "1",
      questions: "Do Kyc Verification",
    },
    {
      id: "2",
      questions: "Define stock",
    },
    {
      id: "3",
      questions: "Define mutual funds",
    },
    {
      id: "4",
      questions: "Define Gold",
    },
    {
      id: "5",
      questions: "Define Us Stocks",
    },
  ];

  const ParticularFaq = (ids) => {
    const pfaq = faqs.find(({ id }) => id === ids);

    setQues(pfaq.questions);

    onOpenModal();
  };

  // useEffect(() => {
  //   axios
  //     .get("url of unanswered faqs")
  //     .then((res) => setfaqs(res.data.faqs));
  // }, [faqs]);

  return (
    <Container>
      {login ? (
        <SignupContainer>
          <SignupHeader>ADMIN FORM</SignupHeader>
          <InputContainer>
            <form onSubmit={formik.handleSubmit} autocomplete="off">
              <TextField
                fullWidth
                id="name"
                name="name"
                label="Your Name"
                value={formik.values.name}
                onChange={formik.handleChange}
                error={formik.touched.name && Boolean(formik.errors.name)}
                helperText={formik.touched.name && formik.errors.name}
              />
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
                error={
                  formik.touched.password && Boolean(formik.errors.password)
                }
                helperText={formik.touched.password && formik.errors.password}
              />

              <Button
                color="primary"
                variant="contained"
                fullWidth
                type="submit"
              >
                Submit
              </Button>
            </form>
          </InputContainer>
        </SignupContainer>
      ) : (
        <Container>
          <Heading>UNANSWERED FAQS</Heading>
          <Orders>
            {faqs.map(({ questions, id }) => (
              <Row
                onClick={() => {
                  ParticularFaq(id);
                }}
              >
                <div>{questions}</div>
              </Row>
            ))}
          </Orders>
        </Container>
      )}

      <Modal open={open} onClose={onCloseModal} center>
        <ModalContainer>
          <ModalHeading>FAQ Form</ModalHeading>

          <input placeholder="Question" value={ques} readOnly />
          <input placeholder="Answer" />
          <Chips
            className="chipsm"
            value={chips}
            onChange={(chips) => setChips(chips)}
            suggestions={[
              "Stocks",
              "Mutual Funds",
              "Gold",
              "Fixed Deposits",
              "Source",
            ]}
          />

          <SubmitButton>Submit</SubmitButton>
        </ModalContainer>
      </Modal>
    </Container>
  );
}

export default Admin;

const Container = styled.div`
  font-size: 18px;
  align-items: center;
  padding-top: 12px;
  padding-bottom: 35px;
`;

const Heading = styled.h1`
  margin-top: 15px;
`;

const Orders = styled.div`
  padding-left: 12%;
  padding-right: 12%;
  padding-top: 20px;
  padding-bottom: 30px;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 12px;
  border: 1px solid lightgray;

  :hover{
    box-shadow: 0 1px 9px 0 lightgrey;
    cursor:pointer;
  }
}
`;

const SignupContainer = styled.div`
  width: 450px;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 475px;
  margin: 8px auto;
  box-shadow: 0 1px 5px 0 lightgrey;
  border-radius: 6px;
`;

const SignupHeader = styled.h1`
  margin-top: 22px;
  margin-bottom: 23px;
  letter-spacing: 0.3px;
  font-size: 36px;
  font-weight: 600;
  color: #44475b;
`;

const InputContainer = styled.div`
  width: 80%;
`;

const ModalContainer = styled.div`
  width: 500px;
  align-items: center;
  display: flex;
  flex-direction: column;
  padding-bottom: 20px;

  input {
    width: 80%;
    margin-bottom: 15px;
    padding: 9px 13px;
    border: 1px solid #7f7777;
    border-radius: 5px;
    outline-color: #00d09c;
    font-size: 17px;
  }

  div{
      width:80%;
      border: 1px solid #7f7777 !important;
      outline-color: #00d09c;
      div{
          width:auto;
          border:none !important;
          outline:none;
      }
  }

  }
`;

const ModalHeading = styled.h1`
  margin-top: 31px;
  margin-bottom: 22px;
  font-size: 32px;
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
  margin-top: 20px;
`;
