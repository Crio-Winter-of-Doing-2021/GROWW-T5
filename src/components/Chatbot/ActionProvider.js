import axios from "../../axios";

class ActionProvider {
  constructor(createChatBotMessage, setStateFunc, createClientMessage) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
    this.createClientMessage = createClientMessage;
  }

  handleFaqTap = (faqId) => {
    axios.get(`/api/v1/faq/${faqId}`)
    .then((res) => {
      if (res.status === 200) {
        const message = this.createChatBotMessage(res.data.answer);
        this.addMessageToBotState(message);
      } else {
        const message = this.createChatBotMessage("Couldn't find your FAQ raise a ticket")
        this.addMessageToState(message);
      }
    });
  };

  greet = () => {
    const message = this.createChatBotMessage("Hello");
    this.addMessageToBotState(message);
  };

  handleMessage = (message) => {
    let config = {
      headers: { accesstoken: localStorage.getItem("accesstoken") },
      params: {
        message: message,
      },
    };
    axios.get(`/api/v1/faq`, config)
    .then((res) => {
      if (res.status === 200) {
        console.log(res.data);
        if (res.data.reply) {
          const message = this.createChatBotMessage(res.data.reply.answer);
          this.addMessageToBotState(message);
        } else {
          this.setState((state) => ({
            ...state,
            faqs: res.data.faqs,
          }));
          const message = this.createChatBotMessage("Maybe these will help", {
            widget: "overview",
          });
          this.addMessageToBotState(message);
        }
      } else {
        const message = this.createChatBotMessage("Couldn't find your FAQ raise a ticket")
        this.addMessageToState(message);
      }
    });
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
