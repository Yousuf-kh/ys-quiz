import axios from 'axios';
import { createContext, useContext, useState } from 'react';

const AppContext = createContext();


export const AppContextProvider = ({ children }) => {

    const [userName, setUserName] = useState('')
    const [hyper, setHyper] = useState(false)
    const [correct, setCorrect] = useState(0)
    const [message, setMessage] = useState(`user: ${userName}, category:${hyper ? 'html & CSS' : 'JavaScript'}, correct:${correct}`);


    const sendMessageToTelegram = async () => {
        const botToken = "7760141360:AAGjrFh2UP-bsOJa5ioBLRqMnqFacA_9sqY"; // Замените на токен вашего бота
        const chatId = "925359952"; // ID чата, куда отправляется сообщение (ваш или группы)
        const url = `https://api.telegram.org/bot${botToken}/sendMessage`;

        try {
            const response = await axios.post(url, {
                chat_id: chatId,
                text: message,
            });
        } catch (error) {
        }
    };



    const value = {
        userName,
        setUserName,
        hyper,
        setHyper,
        correct,
        setCorrect,
        message,
        sendMessageToTelegram,
        setMessage
    };

    return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};


export const useAppContext = () => {
    return useContext(AppContext);
};