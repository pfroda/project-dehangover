import React from 'react';
import { createContext, useContext, useState } from 'react';
import { postHangover, getUserHangovers } from '../services/apiHangover';

const HangoverContext = createContext({});

export const useHangover = () => {
    const context = useContext(HangoverContext);
    return context;
}


function HangoverProvider({children}) {
    const [userHangovers, setUserHangovers] = useState([]);

    const postHangovers = async (hangover) => {
        try {
            const response = await postHangover(hangover);
            setUserHangovers((userHangovers) => [...userHangovers, response]);

        } catch (err) {
            console.log('Hangover error:', err)
        }
    };

    const getHangovers = async (userId) => {
        try {
            const response = await getUserHangovers(userId);
            setUserHangovers(response);

        } catch (err) {
            console.log('Hangover error', err)
        }
    };

    return (
        <HangoverContext.Provider value={{userHangovers, postHangovers, getHangovers }}>
            {children}
        </HangoverContext.Provider>
    )
}

export default HangoverProvider;