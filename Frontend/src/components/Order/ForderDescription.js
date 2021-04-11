import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import styled from "styled-components";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import axios from "../../axios";

function ForderDescription() {
  let { id } = useParams();

  const [fund, setfund] = useState({});

  //   {
  //     "id": "60619c3f64e1ed01023e5cfe",
  //     "userId": "60463181cba7c314708dd0e3",
  //     "product": {
  //         "_id": "6048bdb663b624029fa2ca36",
  //         "name": "HDFC Direct Plan",
  //         "category": "Mutual Fund",
  //         "specifications": "6048bdb663b624029fa2ca35",
  //         "__v": 0
  //     },
  //     "orderSpecs": {
  //         "investType": "SIP",
  //         "sipAmount": 50000
  //     },
  //     "status": "Completed"
  // }

  useEffect(() => {
    axios
      .get(`url/${id}`)
      .then((res) => setfund(res.data))
      .catch((error) => console.log(error));
  }, []);

  console.log(id);
  return (
    <Container>
      <FundLink>
        <Link to="/orders/mutual-funds">
          <ArrowBackIosIcon />
          Back
        </Link>
      </FundLink>
      <DetailCard>
        <h1 style={{ marginTop: "21px", fontSize: "34px" }}>
          HDFC Direct Plan
        </h1>
        <Row>
          <h2>INVEST TYPE</h2>
          <h2>SIP</h2>
        </Row>
        <Row>
          <h2>SIP AMOUNT</h2>
          <h2>50000</h2>
        </Row>
        <Row>
          <h2>STATUS</h2>
          <h2>Completed</h2>
        </Row>
      </DetailCard>
    </Container>
  );
}

export default ForderDescription;

const Container = styled.div`
  margin-left: 12%;
  margin-bottom: 70px;
  margin-top: 50px;
  margin-right: 12%;
`;

const FundLink = styled.div`
  cursor: pointer;
  font-weight: 800;
  text-align: start;

  a {
    color: black;
    display: flex;
  }
  a:hover {
    color: #00d09c;
    text-decoration: underline;
  }

  .MuiSvgIcon-root {
    width: 13px;
  }
`;

const DetailCard = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 312px;
  margin: 30px auto;
  box-shadow: 0 1px 5px 0 lightgrey;
  border-radius: 6px;
`;

const Row = styled.div`
  display: flex;
  width:54%;
  justify-content: space-between;
  padding: 12px 5px;

  border-right: none;
  border-left: none;

}
`;
