import "./App.css";
import Chatbots from "./components/Chatbot/Chatbot";
import Header from "./components/Header";
import RoutesHeader from "./components/RoutesHeader";
import Footer from "./components/Footer";
import styled from "styled-components";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import { useState } from "react";

function App() {
  const [showBot, toggleBot] = useState(false);
  return (
    <div className="App">
      {showBot && <Chatbots />}
      <Button onClick={() => toggleBot((prev) => !prev)}>Bot</Button>
      <Router>
        <Switch>
          <Route path="/gold">
            <Header />
            <RoutesHeader category="gold" />
          </Route>
          <Route path="/us-stocks">
            <Header />
            <RoutesHeader category="us-stocks" />
          </Route>
          <Route path="/fixed-deposits">
            <Header />
            <RoutesHeader category="fixed-deposits" />
          </Route>
          <Route path="/mutual-funds">
            <Header />
            <RoutesHeader category="mutual-funds" />
          </Route>
          <Route path="/stocks">
            <Header />
            <RoutesHeader category="stocks" />
            <Footer />
          </Route>
          <Route
            exact
            path="/"
            render={() => {
              return <Redirect to="/stocks" />;
            }}
          />
          {/* <Route path="/">
            <Header />
            <RoutesHeader />
            <Footer />
          </Route> */}
        </Switch>
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
