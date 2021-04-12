import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";

function StockDescription({ match }) {
  const stocksDescription = [
    {
      id: "dr-reddys-lab",
      name: "Dr. Reddys Lab",
      about:
        "About the company Dr. Reddys Laboratories Ltd. is in Pharmaceuticals Drugs. It was incorporated in year 1984. The current market capitalisation stands ₹73,261 Cr. The company is listed on the Bombay Stock Exchange (BSE) with the BSE code as 500124. and also listed on National Stock Exchange (NSE) with NSE code as DRREDDY. ",
      img:
        "https://assets-netstorage.groww.in/stock-assets/logos/INE089A01023.png",
      year: "1984",
      director: "GV Prasad",
      MarketCap: "₹73,216 Cr",
      PBRatio: "4.50",
      PERatio: "30.81",
      IndustryPE: "29.75",
      DIVYield: "0.57%",
      BookValue: "₹979.36",
      EPS: "₹142.98",
      ROE: "14.60%",
    },
    {
      id: "icici-bank",
      name: "ICICI Bank",
      about:
        "ICICI Bank Ltd. is in Bank - Private. It was incorporated in year 1994. The current market capitalisation stands ₹4,00,115 Cr. The company is listed on the Bombay Stock Exchange (BSE) with the BSE code as 532174. and also listed on National Stock Exchange (NSE) with NSE code as ICICIBANK.",
      img:
        "https://assets-netstorage.groww.in/stock-assets/logos/INE090A01021.png",
      year: "1994",
      director: "Sandeep Bakshi",
      MarketCap: "₹4,00,216 Cr",
      PBRatio: "2.97",
      PERatio: "30.51",
      IndustryPE: "22.75",
      DIVYield: "0.47%",
      BookValue: "₹199.36",
      EPS: "₹18.98",
      ROE: "9.60%",
    },
    {
      id: "alkem-laboratories",
      name: "Alkem Laboratories",
      about:
        "Alkem Laboratories Ltd. is in Pharmaceuticals &amp; Drugs. It was incorporated in year 1973. The current market capitalisation stands ₹31,674 Cr. The company is listed on the Bombay Stock Exchange (BSE) with the BSE code as 539523. and also listed on National Stock Exchange (NSE) with NSE code as ALKEM. ",
      img:
        "https://assets-netstorage.groww.in/stock-assets/logos/INE540L01014.png",
      year: "1973",
      director: "Sandeep Singh",
      MarketCap: "₹31,216 Cr",
      PBRatio: "4.42",
      PERatio: "19.51",
      IndustryPE: "29.75",
      DIVYield: "0.89%",
      BookValue: "₹599.36",
      EPS: "₹133.98",
      ROE: "22.24%",
    },
    {
      id: "adani-green-energy",
      name: "Adani Green Energy",
      about:
        "Adani Green Energy Ltd. is in Power Generation/Distribution. The current market capitalisation stands ₹1,89,488 Cr. The company is listed on the Bombay Stock Exchange (BSE) with the BSE code as 541450. and also listed on National Stock Exchange (NSE) with NSE code as ADANIGREEN.",
      img:
        "https://assets-netstorage.groww.in/stock-assets/logos/INE364U01010.png",
      year: "2005",
      director: "Gautam Adani",
      MarketCap: "₹1,31,216 Cr",
      PBRatio: "80.42",
      PERatio: "642.51",
      IndustryPE: "28.75",
      DIVYield: "0.69%",
      BookValue: "₹59.36",
      EPS: "₹1.98",
      ROE: "12.24%",
    },
  ];

  const stock = stocksDescription.find(
    ({ id }) => id === match.params.stockname
  );

  return (
    <Container>
      <StockLink>
        <Link to="/stocks">
          <ArrowBackIosIcon />
          Back to Stocks
        </Link>
      </StockLink>

      <StockName>{stock.name}</StockName>
      <Performance></Performance>
      <AboutCompany>
        <Heading>About the company</Heading>
        <Statement>{stock.about}</Statement>
        <Wrapper>
          <Organisation>
            <div style={{ fontWeight: "bold" }}>Organisation</div>
            <div style={{ color: "#00d09c" }}>{stock.name}</div>
          </Organisation>
          <Year>
            <div style={{ fontWeight: "bold" }}>Founded Year</div>
            <div>{stock.year}</div>
          </Year>
          <Director>
            <div style={{ fontWeight: "bold" }}>Managing Director</div>
            <div style={{ color: "#00d09c" }}>{stock.director}</div>
          </Director>
        </Wrapper>
      </AboutCompany>
      <Stats>
        <Heading>Company Statistics</Heading>
        <StatsWrapper>
          <Col>
            <Market>
              <div style={{ fontWeight: "bold" }}>Market Cap</div>
              <div>{stock.MarketCap}</div>
            </Market>
            <Yield>
              <div style={{ fontWeight: "bold" }}>DIV. Yield</div>
              <div>{stock.DIVYield}</div>
            </Yield>
          </Col>
          <Col>
            <PBRatio>
              <div style={{ fontWeight: "bold" }}>P/B Ratio</div>
              <div>{stock.PBRatio}</div>
            </PBRatio>
            <Book>
              <div style={{ fontWeight: "bold" }}>Book Value</div>
              <div>{stock.BookValue}</div>
            </Book>
          </Col>
          <Col>
            <PERatio>
              <div style={{ fontWeight: "bold" }}>P/E Ratio</div>
              <div>{stock.PERatio}</div>
            </PERatio>
            <TTM>
              <div style={{ fontWeight: "bold" }}>EPS(TTM)</div>
              <div>{stock.EPS}</div>
            </TTM>
          </Col>
          <Col>
            <Indus>
              <div style={{ fontWeight: "bold" }}>Industry P/E</div>
              <div>{stock.IndustryPE}</div>
            </Indus>
            <ROE>
              <div style={{ fontWeight: "bold" }}>ROE</div>
              <div>{stock.ROE}</div>
            </ROE>
          </Col>
        </StatsWrapper>
      </Stats>
    </Container>
  );
}

export default StockDescription;

const Container = styled.div`
  margin-left: 12%;
  margin-bottom: 70px;
  margin-top: 50px;
  margin-right: 12%;
`;

const StockName = styled.h1`
  margin-top: 25px;
`;
const Performance = styled.div``;
const AboutCompany = styled.div`
  text-align: left;
  margin-top: 25px;
`;

const Heading = styled.h2``;

const Statement = styled.div`
  font-size: 15px;
  margin-top: 15px;
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
  margin-top: 45px;
`;
const StatsWrapper = styled.div`
  text-align: start;
  margin-top: 20px;
  display: flex;
  justify-content: space-around;
`;

const Col = styled.div``;

const Market = styled.div``;
const PERatio = styled.div``;
const PBRatio = styled.div``;
const Yield = styled.div`
  margin-top: 15px;
`;
const Book = styled.div`
  margin-top: 15px;
`;
const TTM = styled.div`
  margin-top: 15px;
`;
const ROE = styled.div`
  margin-top: 15px;
`;
const Indus = styled.div``;

const StockLink = styled.div`
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
