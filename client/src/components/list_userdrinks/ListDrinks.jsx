import React, { useEffect, useState } from 'react';
import { getUserDrinks } from '../../services/apiDrink';

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
          <li key={drink._id}>
            {drink.type.name} - {drink.numConsumptions} - {}consumptions
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListDrinks;
