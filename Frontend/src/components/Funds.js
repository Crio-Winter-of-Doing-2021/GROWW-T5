import React from "react";
import styled from "styled-components";
import Card from "./Card";

function Funds() {
  const fundsArray = [
    {
      category: "funds",
      id: "icici-prudential-technology-direct-plan-growth",
      img: "https://groww.in/images/partners/icici_groww.svg",
      cardname: "ICICI Prudential Technology Direct Plan Growth",
      cardprice: "29.4%",
      cardrate: "(3Y)",
    },
    {
      category: "funds",
      id: "axis-bluechip-fund-direct-plan-growth",
      img: "https://groww.in/images/partners/axis_groww.svg",
      cardname: "Axis Bluechip Fund Direct Plan Growth",
      cardprice: "18.1%",
      cardrate: "(3Y)",
    },
    {
      category: "funds",
      id: "tata-digital-india-fund-direct-growth",
      img: "https://groww.in/images/partners/tata_groww.svg",
      cardname: "Tata Digital India Fund Direct Growth",
      cardprice: "30.4%",
      cardrate: "(3Y)",
    },
    {
      category: "funds",
      id: "uti-nifty-index-fund-direct-growth",
      img: "https://groww.in/images/partners/uti_groww.svg",
      cardname: "UTI Nifty Index Fund Direct Growth",
      cardprice: "14.3%",
      cardrate: "(3Y)",
    },
  ];
  return (
    <Container>
      {fundsArray.map(({ id, img, cardname, cardprice, cardrate }) => (
        <Card
          key={id}
          id={id}
          img={img}
          cardname={cardname}
          cardprice={cardprice}
          cardrate={cardrate}
        />
      ))}
    </Container>
  );
}

export default Funds;

const Container = styled.div`
  margin-left: 12%;
  margin-bottom: 50px;
  margin-top: 50px;
  margin-right: 12%;
  display: flex;
`;
