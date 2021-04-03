import "./App.css";
import Chatbots from "./components/Chatbot/Chatbot";
import Header from "./components/Header";
import RoutesHeader from "./components/RoutesHeader";
import Footer from "./components/Footer";
import styled from "styled-components";
import Stocks from "./components/Stocks";
import Funds from "./components/Funds";
import StockDescription from "./components/StockDescription";
import FundDescription from "./components/FundDescription";
import Order from "./components/Order/Order";
import Admin from "./components/Admin";
import {
  BrowserRouter as Router,
  Routes,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import { useState } from "react";

function App() {
  const [showBot, toggleBot] = useState(false);

  window.onbeforeunload = function (e) {
    localStorage.clear();
  };

  return (
    <div className="App">
      {showBot && <Chatbots />}
      <Button onClick={() => toggleBot((prev) => !prev)}>Bot</Button>
      <Header />
      <Router>
        {/* <Switch> */}
        <Route path="/gold">
          <RoutesHeader category="gold" />
        </Route>
        <Route path="/us-stocks">
          <RoutesHeader category="us-stocks" />
        </Route>
        <Route path="/fixed-deposits">
          <RoutesHeader category="fixed-deposits" />
        </Route>
        <Route path="/mutual-funds">
          <RoutesHeader category="mutual-funds" />
          <Funds />
        </Route>
        <Route path="/stocks">
          <RoutesHeader category="stocks" />
          <Stocks />
        </Route>
        <Route path="/stock/:stockname" component={StockDescription}></Route>
        <Route
          path="/mutual-fund/:fundname"
          component={FundDescription}
        ></Route>

        <Route path="/order/:category" component={Order}>
          {/* <Order /> */}
        </Route>
        <Route path="/admin" component={Admin}></Route>

        <Route
          exact
          path="/"
          render={() => {
            return <Redirect to="/stocks" />;
          }}
        />
        {/* </Switch> */}
        <Footer />
      </Router>
    </div>
  );
}

export default App;

const Button = styled.button`
  width: 50px;
  height: 50px;
  border-radius: 25px;
  background-color: #1f3646;
  border: none;
  position: fixed;
  bottom: 15px;
  z-index: 9999;
  right: 40px;
  outline: none;
  cursor: pointer;
  color: white;
`;
