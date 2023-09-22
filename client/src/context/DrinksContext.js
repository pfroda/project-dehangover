import React from 'react';
import { createContext, useContext, useState } from 'react';
import { postDrink, getUserDrinks } from '../services/apiDrink';

const DrinkContent = createContext({});

export const useDrink = () => {
    const context = useContext(DrinkContext);
    return context
}

function DrinkProvider({children}) {
    const [userDrinks, setUserDrinks] = useState(null);

    
}