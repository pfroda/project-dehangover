import React from 'react';
import { createContext, useContext, useState } from 'react';
import { postDrink, getUserDrinks } from '../services/apiDrink';

const DrinkContext = createContext({});

export const useDrink = () => {
    const context = useContext(DrinkContext);
    return context
}

function DrinkProvider({children}) {
    const [userDrinks, setUserDrinks] = useState([]);

    const postDrinks = async (drink) => {
        try {
            const response = await postDrink(drink);
            setUserDrinks((userDrinks) => [...userDrinks, response]);

        } catch (err) {
            console.log('Drink error:', err)
        }
    }

    const getDrinks = async (userId) => {
        try {
            const response = await getUserDrinks(userId);
            // console.log('Fetched drinks:', response);
            setUserDrinks(response)
    
        } catch (err) {
            console.log('Drink error', err)
        }
    }

    return (
        <DrinkContext.Provider value={{userDrinks, postDrinks, getDrinks}}>
            {children}
        </DrinkContext.Provider>
    )
}

export default DrinkProvider;
