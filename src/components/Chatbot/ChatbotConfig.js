import { createChatBotMessage } from "react-chatbot-kit";
import React from "react";
import BotAvatar from "./BotAvatar";

const config = {
  initialMessages: [createChatBotMessage(`Hello world`)],
  botName: "GrowwBot",
  customComponents: {
    botAvatar: (props) => <BotAvatar {...props} />,
  },
  customStyles: {
    botMessageBox: {
      backgroundColor: "#00d09c",
    },
    chatButton: {
      backgroundColor: "#00d09c",
    },
  },
};

export default config;
