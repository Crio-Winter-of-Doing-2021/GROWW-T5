import React from "react";
import styled from "styled-components";
import { Link, useRouteMatch, Route, Switch } from "react-router-dom";
import Footer from "./Footer";

function Card({ id, img, cardname, cardprice, cardrate }) {
  let { path, url } = useRouteMatch();
  console.log(url);

  return (
    <Container>
      <Link to={`${url}/${id}`}>
        <img src={img}></img>
        <CardName>{cardname}</CardName>
        <CardPrice>{cardprice}</CardPrice>
        <CardRate>{cardrate}</CardRate>
      </Link>

      {/* <Route path="/stocks/adani-green-energy">
        <Footer />
      </Route> */}
    </Container>
  );
}

export default Card;
const Container = styled.div`
  min-height: 190px;
  min-width: 168px;
  width: 100%;
  position: relative;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding-bottom: 15px;
  padding-top: 15px;
  border-radius: 8px;
  margin-right: 15px;
  box-shadow: 0 1px 5px 0 lightgrey;
  align-items: center;

  img {
    width: 60px;
    height: 50px;
    object-fit: contain;
    margin-bottom: 42px;
  }
`;

const CardName = styled.h3``;

const CardPrice = styled.h3``;

const CardRate = styled.h3`
  color: #00d09c;
`;
