import React from "react";
import styled from "styled-components";
import Card from "./Card";
import { Link, useRouteMatch } from "react-router-dom";

function Description() {
  return (
    <Container>
      <StockName>Dr.Reddys Lab</StockName>
      <Performance></Performance>
      <AboutCompany>
        <Heading>About the company</Heading>
        <Statement>
          About the company Dr. Reddys Laboratories Ltd. is in Pharmaceuticals
          &amp; Drugs. It was incorporated in year 1984. The current market
          capitalisation stands ₹73,261 Cr. The company is listed on the Bombay
          Stock Exchange (BSE) with the BSE code as 500124. and also listed on
          National Stock Exchange (NSE) with NSE code as DRREDDY.
        </Statement>
        <Wrapper>
          <Organisation>
            <div style={{ fontWeight: "bold" }}>Organisation</div>
            <div>Dr. Reddys Lab</div>
          </Organisation>
          <Year>
            <div style={{ fontWeight: "bold" }}>Founded Year</div>
            <div>1984</div>
          </Year>
          <Director>
            <div style={{ fontWeight: "bold" }}>Managing Director</div>
            <div>GV Prasad</div>
          </Director>
        </Wrapper>
      </AboutCompany>
      <Stats>
        <Heading>Company Statistics</Heading>
        <StatsWrapper>
          <Row1>
            <Market>
              <div style={{ fontWeight: "bold" }}>Market Cap</div>
              <div>₹73,216 Cr</div>
            </Market>
            <PBRatio>
              <div style={{ fontWeight: "bold" }}>P/B Ratio</div>
              <div>4.50</div>
            </PBRatio>
            <PERatio>
              <div style={{ fontWeight: "bold" }}>P/E Ratio</div>
              <div>30.81</div>
            </PERatio>
            <Indus>
              <div style={{ fontWeight: "bold" }}>Industry P/E</div>
              <div>29.75</div>
            </Indus>
          </Row1>
          <Row2>
            <Yield>
              <div style={{ fontWeight: "bold" }}>DIV. Yield</div>
              <div>0.57%</div>
            </Yield>
            <Book>
              <div style={{ fontWeight: "bold" }}>Book Value</div>
              <div>₹979.36</div>
            </Book>
            <TTM>
              <div style={{ fontWeight: "bold" }}>EPS(TTM)</div>
              <div>₹142.98</div>
            </TTM>
            <ROE>
              <div style={{ fontWeight: "bold" }}>ROE</div>
              <div>14.60%</div>
            </ROE>
          </Row2>
        </StatsWrapper>
      </Stats>
    </Container>
  );
}

export default Description;

const Container = styled.div`
  margin-left: 12%;
  margin-bottom: 50px;
  margin-top: 50px;
  margin-right: 12%;
`;

const StockName = styled.h1``;
const Performance = styled.div``;
const AboutCompany = styled.div`
  text-align: left;
`;

const Heading = styled.h2``;

const Statement = styled.div`
  font-size: 15px;
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  font-size: 15px;
  margin-top: 25px;
`;

const Organisation = styled.div``;
const Year = styled.div``;
const Director = styled.div``;
const Stats = styled.div`
  text-align: left;
  margin-top: 50px;
`;
const StatsWrapper = styled.div`
  text-align: start;
  margin-top: 50px;
`;
const Row1 = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-top: 22px;
`;
const Row2 = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-top: 22px;
`;
const Market = styled.div``;
const PERatio = styled.div``;
const PBRatio = styled.div``;
const Yield = styled.div``;
const Book = styled.div``;
const TTM = styled.div``;
const ROE = styled.div``;
const Indus = styled.div``;
