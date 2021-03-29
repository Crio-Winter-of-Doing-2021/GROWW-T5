import React from "react";
import Chatbot from "react-chatbot-kit";
import config from "./ChatbotConfig";
import MessageParser from "./MessageParser";
import ActionProvider from "./ActionProvider";

function Chatbots() {
  return (
    <div>
      <Chatbot
        config={config}
        messageParser={MessageParser}
        actionProvider={ActionProvider}
      />
    </div>
  );
}

export default Chatbots;
