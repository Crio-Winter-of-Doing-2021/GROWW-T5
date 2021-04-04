class MessageParser {
  constructor(actionProvider, state) {
    this.actionProvider = actionProvider;
    this.state = state
  }

  parse(message) {
    const lowerCase = message.toLowerCase();

    if (lowerCase.includes("hi") || lowerCase.includes("hey"), lowerCase.includes('hello')) {
      return this.actionProvider.greet()
    }

    return this.actionProvider.handleMessage(message);
    // if (
    //   lowerCase.includes("messageparser") ||
    //   lowerCase.includes("parse") ||
    //   lowerCase.includes("parser") ||
    //   lowerCase.includes("message parser")
    // ) {
    //   return this.actionProvider.handleMessageParserDocs();
    // }

    // if (lowerCase.includes("action") || lowerCase.includes("actionprovider")) {
    //   return this.actionProvider.handleActionProviderDocs();
    // }

    // if (lowerCase.includes("config")) {
    //   return this.actionProvider.handleConfigDocs();
    // }

    // if (lowerCase.includes("widget")) {
    //   return this.actionProvider.handleWidgetDocs();
    // }

    // return this.actionProvider.handleDefault();
  }
}

export default MessageParser;
