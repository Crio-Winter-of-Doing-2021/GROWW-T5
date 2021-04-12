import React from "react";
import styled from "styled-components";
import Card from "./Card";

function Stocks() {
  const stocksArray = [
    {
      category: "stock",
      id: "adani-green-energy",
      img:
        "https://assets-netstorage.groww.in/stock-assets/logos/INE364U01010.png",
      cardname: "Adani Green Energy",
      cardprice: "₹1226.80",
      cardrate: "64.55 (5.00%)",
    },
    {
      category: "stock",
      id: "icici-bank",
      img:
        "https://assets-netstorage.groww.in/stock-assets/logos/INE090A01021.png",
      cardname: "ICICI Bank",
      cardprice: "₹571.55",
      cardrate: "4.05 (0.71%)",
    },
    {
      category: "stock",
      id: "alkem-laboratories",
      img:
        "https://assets-netstorage.groww.in/stock-assets/logos/INE540L01014.png",
      cardname: "Alkem Laboratories",
      cardprice: "₹2,640.35",
      cardrate: "65.55 (2.55%)",
    },
    {
      category: "stock",
      id: "dr-reddys-lab",
      img:
        "https://assets-netstorage.groww.in/stock-assets/logos/INE089A01023.png",
      cardname: "Dr. Reddys Lab",
      cardprice: "₹4,380.55",
      cardrate: "30.05 (0.69%)",
    },
  ];

  return (
    <Container>
      {stocksArray.map(
        ({ category, id, img, cardname, cardprice, cardrate }) => (
          <Card
            key={id}
            category={category}
            id={id}
            img={img}
            cardname={cardname}
            cardprice={cardprice}
            cardrate={cardrate}
          />
        )
      )}
    </Container>
  );
}

export default Stocks;

const Container = styled.div`
  margin-left: 12%;
  margin-bottom: 50px;
  margin-top: 50px;
  margin-right: 12%;
  display: flex;
`;
