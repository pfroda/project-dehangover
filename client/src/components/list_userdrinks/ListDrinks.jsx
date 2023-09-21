import React, { useEffect, useState } from 'react';
import { getUserDrinks } from '../../services/apiDrink';
import { format } from 'date-fns';
import './listdrinks.css'

function ListDrinks({ userId }) {
  const [userDrinks, setUserDrinks] = useState([]);

  useEffect(() => {
    // fetch drinks - change it so it just shows on submit new drink

    async function fetchUserDrinks() {
      try {
        const drinks = await getUserDrinks(userId);
        setUserDrinks(drinks);
      } catch (error) {
        console.error('Error fetching user drinks:', error);
      }
    }

    fetchUserDrinks();
  }, [userId]);

  return (
    <div>
      <h2>Your Drinks</h2>
      <ul>
        {userDrinks.map((drink) => (
          <li key={drink._id} className='listed-drinks'>
            <div className="listed-drinks-image">
            <img src={`/assets/drinks/${drink.type.imageUrl}`} alt="" />
            </div>
            <div className='listed-drinks-details'>

            {drink.numConsumptions} {drink.type.name} -
            <div className='listed-drinks-date'>
            {format(new Date(drink.dateConsumed), 'dd MMM - HH:mm\'h\'')}
            </div>

            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListDrinks;
