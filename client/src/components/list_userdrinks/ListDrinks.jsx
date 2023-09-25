import React, { useEffect, useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { useDrink } from '../../context/DrinksContext'; 
import { useHangover } from '../../context/HangoversContext';
import { format } from 'date-fns';
import './listdrinks.css';

function ListDrinks() {
  const { user } = useAuth();
  const { userDrinks, getDrinks } = useDrink();
  const { userHangovers, getHangovers } = useHangover()

  useEffect(() => {
    
    getDrinks(user.id);
    getHangovers(user.id)
  
  }, [userDrinks]);
  // userDrinks, user.id
  // if i add userDrinks in useEffect it keeps updating again and again, but necessary to display list automatically

  const previousHangoverDate = userHangovers.length > 0 ? userHangovers[userHangovers.length - 1].hangoverDate : null;

  const filteredUserDrinks = previousHangoverDate
  ? userDrinks.filter((drink) => new Date(drink.dateConsumed) > new Date(previousHangoverDate))
  : userDrinks;


  return (
    <div>
      {filteredUserDrinks.length > 0 ? (
        
        <>
        <h4>What you've drunk</h4>
        <ul>
          {filteredUserDrinks.map((drink) => (
            <li key={drink._id} className='listed-drinks'>
              <div className="listed-drinks-image">
                <img src={`/assets/drinks/${drink.type.imageUrl}`} alt="" />
              </div>
              <div className='listed-drinks-details'>
                {drink.numConsumptions} {drink.type.name}
                <div className='listed-drinks-date'>
                  {format(new Date(drink.dateConsumed), 'dd MMM - HH:mm\'h\'')}
                </div>
              </div>
            </li>
          ))}
        </ul>
        
        
        </>
      ) : (
        <p> </p>
        
      )}
      {/* <button onClick={handleClick}>CLick me please</button> */}
      {/* <div>{userDrinks}</div> */}
    </div>
  );
}

export default ListDrinks;

