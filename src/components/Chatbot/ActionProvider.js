const axios = require('axios')

class ActionProvider {
  constructor(createChatBotMessage, setStateFunc, createClientMessage) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
    this.createClientMessage = createClientMessage;
  }

  handleFaqTap = (faqId) => {
    axios.get(`http://localhost:4000/api/v1/faq/${faqId}`)
    .then(res => {
        const message = this.createChatBotMessage(res.data.answer)
        this.addMessageToBotState(message)
    })
  }

  greet = () => {
    const message = this.createChatBotMessage("Hello")
    this.addMessageToBotState(message)
  }

  handleMessage = (message) => {
    let config = {
      headers: {'accesstoken': localStorage.getItem('accesstoken')},
      params: {
        message: message
      },
    }
    axios.get(`http://localhost:4000/api/v1/faq`, config)
    .then(res => {
        console.log(res.data)
        if (res.data.reply) {
          const message = this.createChatBotMessage(res.data.reply.answer)
          this.addMessageToBotState(message)
        } else {
          this.setState((state) => ({
            ...state,
            faqs: res.data.faqs
          }))
          const message = this.createChatBotMessage("Maybe these will help", {widget: "overview"})
          this.addMessageToBotState(message)
        }
    })
  }

  handleMessageParserDocs = () => {
    const messages = this.createChatBotMessage(
      "The message parser controls how the bot reads input and decides which action to invoke."
      // { widget: "messageParser", withAvatar: true }
    );

    this.addMessageToBotState(messages);
  };

  handleKyc = () => {
    const messages = this.createChatBotMessage(
      "Please do kyc verification"
      // { widget: "messageParser", withAvatar: true }
    );

    this.addMessageToBotState(messages);
  };

  handleActionProviderDocs = () => {
    const messages = [
      this.createChatBotMessage(
        "The action provider defines the bots response after the message is parsed."
        // { widget: "actionProviderDocs", withAvatar: true }
      ),
    ];

    this.addMessageToBotState(messages);
  };

  handleConfigDocs = () => {
    const messages = this.createChatBotMessage(
      "The config controls every configurable aspect of the chatbot."
      // { widget: "config", withAvatar: true }
    );

    this.addMessageToBotState(messages);
  };

  handleWidgetDocs = () => {
    const messages = this.createChatBotMessage(
      "Widgets are custom components that you want to render with a chatbot response."
      // { widget: "widget", withAvatar: true }
    );

    this.addMessageToBotState(messages);
  };

  handleDefault = () => {
    const message = this.createChatBotMessage(
      "How can I help? Here is the overview.",
      {
        withAvatar: true,
        widget: "overview",
      }
    );

    this.addMessageToBotState(message);
  };

  addMessageToBotState = (messages, newState) => {
    if (Array.isArray(messages)) {
      this.setState((state) => ({
        ...state,
        ...newState,
        messages: [...state.messages, ...messages],
        gist: "",
        infoBox: "",
      }));
    } else {
      this.setState((state) => ({
        ...state,
        ...newState,
        messages: [...state.messages, messages],
        gist: "",
        infoBox: "",
      }));
    }
  };
}

export default ActionProvider;
