import { createChatBotMessage } from "react-chatbot-kit";

const getGreetingMessage = (botName) => {
    const name = localStorage.getItem("name");
    const prevGreeted = localStorage.getItem("prevGreeted")
    console.log(prevGreeted)
    console.log(name)
    if (name != null) {
        if (prevGreeted) {
            return createChatBotMessage(
                `Hello Again ${name}.`
            )
        }
        localStorage.setItem("prevGreeted", true)
        return createChatBotMessage(
            `Hi ${name}. I am ${botName}`
        )
    } else {
        return createChatBotMessage(
            `Hi, I am ${botName}`
        )
    }
}

const getFaqMessage = () => {
    return createChatBotMessage(
        `Perhaps these will help`, 
        {
            withAvatar: false,
            delay: 500,
            widget: "faqs",
        }
    )
}

const getInitialMessages = (botName) => {
    const initialMessages = [
        getGreetingMessage(botName),
        getFaqMessage()
    ]
    return initialMessages
}

export default getInitialMessages;
