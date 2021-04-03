import { createChatBotMessage } from "react-chatbot-kit";
import React from "react";
import BotAvatar from "./BotAvatar";
import Overview from "./Widgets/Overview";

const config = {
  initialMessages: [
    createChatBotMessage(`Hello world`),
    createChatBotMessage(
      "Here's a quick overview over what I need to function. ask me about the different parts to dive deeper.",
      {
        withAvatar: false,
        delay: 500,
        widget: "overview",
      }
    ),
  ],
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
      widgetFunc: (props) => <Overview {...props} />,
      mapStateToProps: ["gist"],
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
