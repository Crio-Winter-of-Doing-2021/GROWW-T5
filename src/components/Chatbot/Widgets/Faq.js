import { useState, useEffect } from "react";
import styled from "styled-components";
import axios from '../../../axios'
import RaiseTicket from './RaiseTicket'

const Faqs = (props) => {
  const [faqs, setfaqs] = useState([]);

  let pageId = window.location.href.split("/")[3];
  console.log(pageId)

  useEffect(() => {
    if (props.faqs) {
      setfaqs(props.faqs);
    } else {
      let config = {
        headers: { accesstoken: localStorage.getItem("accesstoken") },
        params: {
          pageId: pageId,
        },
      };
      axios
        .get("/api/v1/faq", config)
        .then((res) => {
          if (res.data.faqs) {
            setfaqs(res.data.faqs)
          } else {
            setfaqs(null)
          }
        })
        .catch((error) => setfaqs(null));
    }
  }, []);

  return (
    <Container>
      {faqs ? (
        faqs.map((faq) => (
          <Button
            key={faq._id}
            onClick={() => props.actionProvider.handleFaqTap(faq._id)}
          >
            {faq.question}
          </Button>
        ))): (<RaiseTicket />)
      }
    </Container>
  );
};
export default Faqs;

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
