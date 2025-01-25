import React, { useState } from "react";
import axios from "axios";
import { useAppContext } from "../context";

const SendFile = () => {
    const { sendMessageToTelegram, setMessage, message } = useAppContext();

    // const mes = `user: ${user}, category:${category}, correct:${cor}`



    return (
        <div>
            <h1>Отправить сообщение в Telegram</h1>
            <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Введите сообщение"
            />
            <button onClick={sendMessageToTelegram}>Отправить</button>
        </div>
    );
};

export default SendFile;
