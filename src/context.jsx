import { createContext, useContext, useState } from 'react';

const AppContext = createContext();


export const AppContextProvider = ({ children }) => {

    const [userName, setUserName] = useState('')
    const [hyper, setHyper] = useState(false)
    const [correct, setCorrect] = useState(0)



    const value = {
        userName,
        setUserName,
        hyper,
        setHyper,
        correct,
        setCorrect
    };

    return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};


export const useAppContext = () => {
    return useContext(AppContext);
};