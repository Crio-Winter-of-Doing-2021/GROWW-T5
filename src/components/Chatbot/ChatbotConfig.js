import { createChatBotMessage } from "react-chatbot-kit";
import React from "react";
import BotAvatar from "./BotAvatar";
import Faqs from "./Faqs";
import getInitialMessages from "./components/initialMessages";

const botName = "GrowwBot"
const config = {
  initialMessages: getInitialMessages(botName),
  botName: botName,
  customComponents: {botAvatar: (props) => <BotAvatar {...props} />},
  customStyles: {
    botMessageBox: {
      backgroundColor: "#00d09c",
    },
    chatButton: {
      backgroundColor: "#00d09c",
    },
  },
  widgets: [
    {
      widgetName: "faqs",
      widgetFunc: (props) => <Faqs {...props} />,
      mapStateToProps: ["gist"],
    }
  ],
};

export default config;
