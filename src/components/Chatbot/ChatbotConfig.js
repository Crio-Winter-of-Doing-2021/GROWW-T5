import { createChatBotMessage } from "react-chatbot-kit";
import React from "react";
import BotAvatar from "./BotAvatar";
import Overview from "./Widgets/Overview";
import Faqs from "./Widgets/Faq";

const config = {
  initialMessages: [
    createChatBotMessage(`Hello world`),
    createChatBotMessage("Maybe these will help you.", {
      withAvatar: false,
      delay: 500,
      widget: "overview",
    }),
  ],
  state: {
    faqs: null,
  },
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
  widgets: [
    {
      widgetName: "overview",
      widgetFunc: (props) => <Faqs {...props} />,
      mapStateToProps: ["faqs"],
    },
    // {
    //   widgetName: "messageParser",
    //   widgetFunc: (props) => <MessageParser {...props} />,
    //   mapStateToProps: ["gist"],
    // },
    // {
    //   widgetName: "actionProviderDocs",
    //   widgetFunc: (props) => <ActionProviderDocs {...props} />,
    //   mapStateToProps: ["gist"],
    // },
  ],
};

export default config;
