import React from "react";
import styled from "styled-components";
import Card from "./Card";
import { Link, useRouteMatch, Route } from "react-router-dom";
import Description from "./Description";
function Stocks() {
  const stocksArray = [
    {
      id: "adani-green-energy",
      img:
        "https://assets-netstorage.groww.in/stock-assets/logos/INE364U01010.png",
      cardname: "Adani Green Energy",
      cardprice: "₹1226.80",
      cardrate: "64.55 (5.00%)",
    },
    {
      id: "icici-bank",
      img:
        "https://assets-netstorage.groww.in/stock-assets/logos/INE090A01021.png",
      cardname: "ICICI Bank",
      cardprice: "₹571.55",
      cardrate: "4.05 (0.71%)",
    },
    {
      id: "alkem-laboratories",
      img:
        "https://assets-netstorage.groww.in/stock-assets/logos/INE540L01014.png",
      cardname: "Alkem Laboratories",
      cardprice: "₹2,640.35",
      cardrate: "65.55 (2.55%)",
    },
    {
      id: "dr-reddys-lab",
      img:
        "https://assets-netstorage.groww.in/stock-assets/logos/INE089A01023.png",
      cardname: "Dr. Reddys Lab",
      cardprice: "₹4,380.55",
      cardrate: "30.05 (0.69%)",
    },
  ];

  let { path, url } = useRouteMatch();
  console.log(url);

  return (
    <Container>
      {stocksArray.map(({ id, img, cardname, cardprice, cardrate }) => (
        // <Link to={`${url}/${cardname}`}>
        <Card
          id={id}
          img={img}
          cardname={cardname}
          cardprice={cardprice}
          cardrate={cardrate}
        />
        // </Link>
      ))}

      <Route path={`/${url}/adani-green-energy`}>
        <Description />
      </Route>
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
