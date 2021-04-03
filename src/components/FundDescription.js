import React from "react";
import styled from "styled-components";
import Card from "./Card";
import { Link, useRouteMatch } from "react-router-dom";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";

function FundDescription({ match }) {
  let { path, url } = useRouteMatch();
  console.log(path, url);

  const FundsDescription = [
    {
      id: "icici-prudential-technology-direct-plan-growth",
      name: "ICICI Prudential Technology Direct Plan Growth",
      about:
        "ICICI Prudential Technology Direct Plan Growth is a Equity Mutual Fund Scheme launched by ICICI Prudential Mutual Fund. This scheme was made available to investors on 01 Jan 2013. S Naren, Ashwin Jain is the Current Fund Manager of ICICI Prudential Technology Direct Plan Growth fund.The fund currently has an Asset Under Management(AUM) of ₹1,580 Cr and the Latest NAV as of 26 Mar 2021 is ₹113.95. The ICICI Prudential Technology Direct Plan Growth is rated Very High risk. Minimum SIP Investment is set to 100.  Minimum Lumpsum Investment is 5000.  Exit load of 1% if redeemed within 15 days",
      objective:
        "The scheme will seek long term capital appreciation by investing in equity and equity related securities of technology and technology dependent companies. A large share of the AUM will be invested in the stocks under the Benchmark Index, however, the scheme may also invest in other companies which form a part of Information Technology Services Industry.",
      taxImplication:
        "Returns are taxed at 15%, if you redeem before one year. After 1 year, you are required to pay LTCG tax of 10% on returns of Rs 1 lakh+ in a financial year. ",
      risk: "Very High",
      NAV: "₹113.95 (26 Mar 2021)",
      MinSIP: "₹113",
      FundStarted: "01 Jan 2013",
      ExpenseRatio: "1.41%",
      FundSize: "₹1,580 Cr",
    },
    {
      id: "axis-bluechip-fund-direct-plan-growth",
      name: "Axis Bluechip Fund Direct Plan Growth",
      about:
        "Axis Bluechip Fund Direct Plan Growth is a Equity Mutual Fund Scheme launched by Axis Mutual Fund. This scheme was made available to investors on 01 Jan 2013. Shreyash Devalkar is the Current Fund Manager of Axis Bluechip Fund Direct Plan Growth fund.The fund currently has an Asset Under Management(AUM) of ₹23,496 Cr and the Latest NAV as of 26 Mar 2021 is ₹42.19. The Axis Bluechip Fund Direct Plan Growth is rated Very High risk. Minimum SIP Investment is set to 500.  Minimum Lumpsum Investment is 5000.  For units in excess of 10% of the investment,1% will be charged for redemption within 12 months",
      objective:
        "The scheme aims to generate long term capital growth by investing in a diversified portfolio predominantly consisting of equity &amp; equity related instruments of large cap companies. Axis Blue Chip Fund-Direct ( Growth), being an equity fund, is suitable for investors aiming for long term capital appreciation,ideally with an investment horizon of more than five years. There is no lock-in period in this fund, however.",
      taxImplication:
        "Returns are taxed at 15%, if you redeem before one year. After 1 year, you are required to pay LTCG tax of 10% on returns of Rs 1 lakh+ in a financial year.",
      risk: "Very High",
      NAV: "₹42.95 (26 Mar 2021)",
      MinSIP: "₹513",
      FundStarted: "01 Jan 2013",
      ExpenseRatio: "0.51%",
      FundSize: "₹21,580 Cr",
    },
    {
      id: "tata-digital-india-fund-direct-growth",
      name: "Tata Digital India Fund Direct Growth",
      about:
        "Tata Digital India Fund Direct Growth is a Equity Mutual Fund Scheme launched by Tata Mutual Fund. This scheme was made available to investors on 28 Dec 2015. Danesh Mistry is the Current Fund Manager of Tata Digital India Fund Direct Growth fund.The fund currently has an Asset Under Management(AUM) of ₹996 Cr and the Latest NAV as of 26 Mar 2021 is ₹27.76. The Tata Digital India Fund Direct Growth is rated Very High risk. Minimum SIP Investment is set to 150.  Minimum Lumpsum Investment is 5000.  For units in excess of 12% of the investment,1% will be charged for redemption within 365 Days.",
      objective:
        "The scheme seeks long term capital appreciation by investing atleast 80% of its net assets in equity/equity related instruments of the companies in Information Technology Sector in India.",
      taxImplication:
        "Returns are taxed at 15%, if you redeem before one year. After 1 year, you are required to pay LTCG tax of 10% on returns of Rs 1 lakh+ in a financial year. ",
      risk: "Very High",
      NAV: "₹27.95 (26 Mar 2021)",
      MinSIP: "₹213",
      FundStarted: "28 Jan 2016",
      ExpenseRatio: "0.91%",
      FundSize: "₹990 Cr",
    },
    {
      id: "uti-nifty-index-fund-direct-growth",
      name: "UTI Nifty Index Fund Direct Growth",
      about:
        "UTI Nifty Index Fund Direct Growth is a Equity Mutual Fund Scheme launched by UTI Mutual Fund. This scheme was made available to investors on 01 Jan 2013. Kaushik Basu is the Current Fund Manager of UTI Nifty Index Fund Direct Growth fund.The fund currently has an Asset Under Management(AUM) of ₹3,292 Cr and the Latest NAV as of 26 Mar 2021 is ₹96.79.",
      objective:
        "The scheme seeks to invest in stocks of companies comprising Nifty 50 Index and endeavor to achieve return equivalent to Nifty 50 Index by passive investment.",
      taxImplication:
        "Returns are taxed at 15%, if you redeem before one year. After 1 year, you are required to pay LTCG tax of 10% on returns of Rs 1 lakh+ in a financial year.",
      risk: "Very High",
      NAV: "₹96.95 (26 Mar 2021)",
      MinSIP: "₹503",
      FundStarted: "1 Jan 2013",
      ExpenseRatio: "0.11%",
      FundSize: "₹3,290 Cr",
    },
  ];

  const fund = FundsDescription.find(({ id }) => id === match.params.fundname);
  return (
    <Container>
      <FundLink>
        <Link to="/mutual-funds">
          <ArrowBackIosIcon />
          Back to Mutual Funds
        </Link>
      </FundLink>
      <h1 style={{ marginTop: "25px" }}>{fund.name}</h1>
      <AboutCompany>
        <Heading>Details</Heading>
        <Statement>{fund.about}</Statement>
        <Objective>
          <h2>Investment Objective</h2>
          <div>{fund.objective}</div>
        </Objective>
        <Tax>
          <h2>Tax Implications</h2>
          <div>{fund.taxImplication}</div>
        </Tax>
      </AboutCompany>
      <Stats>
        <Heading>Fund Details</Heading>
        <StatsWrapper>
          <Col>
            <Risk>
              <div style={{ fontWeight: "bold" }}>Risk</div>
              <div>{fund.risk}</div>
            </Risk>
            <Nav>
              <div style={{ fontWeight: "bold" }}>NAV</div>
              <div>{fund.NAV}</div>
            </Nav>
          </Col>
          <Col>
            <SIP>
              <div style={{ fontWeight: "bold" }}>Min SIP Amount</div>
              <div>{fund.MinSIP}</div>
            </SIP>
            <FundStarted>
              <div style={{ fontWeight: "bold" }}>Fund Started</div>
              <div>{fund.FundStarted}</div>
            </FundStarted>
          </Col>
          <Col>
            <ExpenseRatio>
              <div style={{ fontWeight: "bold" }}>Expense Ratio</div>
              <div>{fund.ExpenseRatio}</div>
            </ExpenseRatio>
            <FundSize>
              <div style={{ fontWeight: "bold" }}>Fund Size</div>
              <div>{fund.FundSize}</div>
            </FundSize>
          </Col>
        </StatsWrapper>
      </Stats>
    </Container>
  );
}

export default FundDescription;

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

const AboutCompany = styled.div`
  text-align: left;
  margin-top: 25px;
`;

const Heading = styled.h2``;

const Statement = styled.div`
  font-size: 15px;
  margin-top: 15px;
`;

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

const Objective = styled.div`
  margin-top: 20px;
`;
const Tax = styled.div`
  margin-top: 20px;
`;

const Risk = styled.div``;
const SIP = styled.div``;
const ExpenseRatio = styled.div``;
const Nav = styled.div`
  margin-top: 15px;
`;
const FundStarted = styled.div`
  margin-top: 15px;
`;
const FundSize = styled.div`
  margin-top: 15px;
`;
