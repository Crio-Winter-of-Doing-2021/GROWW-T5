import React, { useState } from "react";
import styled from "styled-components";
import { Modal } from "react-responsive-modal";

function RaiseTicket() {
  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  const SubmitForm = () => {
    onCloseModal();
  };

  return (
    <Container>
      <Button onClick={onOpenModal}>Raise Ticket</Button>

      <Modal open={open} onClose={onCloseModal} center>
        <ModalContainer>
          <ModalHeading> Form </ModalHeading>

          <input placeholder="Question" />

          <SubmitButton onClick={SubmitForm}>Submit</SubmitButton>
        </ModalContainer>
      </Modal>
    </Container>
  );
}

export default RaiseTicket;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 10px;
`;

const Button = styled.button`
  border-radius: 25px;
  padding: 8px;
  border: 1px solid #173e3f;
  color: #1d1d1d;
  font-size: 0.8rem;
  margin: 4px 4px;
  background: transparent;
  cursor: pointer;
  outline: none;
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
