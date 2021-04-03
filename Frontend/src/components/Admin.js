import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Modal } from "react-responsive-modal";
import Chips from "react-chips";

function Admin() {
  // const [faqs, setfaqs] = useState([]);

  const [open, setOpen] = useState(false);
  const [chips, setChips] = useState([]);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  const faqs = [
    {
      questions: "Do Kyc Verification",
    },
    {
      questions: "Do Kyc Verification",
    },
    {
      questions: "Do Kyc Verification",
    },
    {
      questions: "Do Kyc Verification",
    },
    {
      questions: "Do Kyc Verification",
    },
  ];

  const change = (e) => {
    e.preventDefault();
    console.log(e.target);
  };

  useEffect(() => {
    //getting some unanswered faqs
  }, [faqs]);
  return (
    <Container>
      <Heading>UNANSWERED FAQS</Heading>
      <Orders>
        {faqs.map(({ questions }) => (
          <Row onClick={onOpenModal}>
            <div>{questions}</div>
          </Row>
        ))}
      </Orders>

      <Modal open={open} onClose={onCloseModal} center>
        <ModalContainer>
          <ModalHeading>FAQ Form</ModalHeading>

          <input placeholder="Question" />
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
