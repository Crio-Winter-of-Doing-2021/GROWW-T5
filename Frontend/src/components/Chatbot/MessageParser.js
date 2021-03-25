class MessageParser {
    constructor(actionProvider, state) {
      this.actionProvider = actionProvider;
      this.state = state;
    }
  
    parse(message) {
      console.log(this.state)
      console.log(message)
    }
  }
  
  export default MessageParser;