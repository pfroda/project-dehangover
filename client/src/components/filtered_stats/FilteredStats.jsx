import React, { useState, useEffect } from 'react';
import { getUserDrinks } from '../../services/apiDrink';
import './filteredstats.css';
import DropdownDate from '../dropdown_date/DropdownDate';

function FilteredStats({ userId }) {
  const [userDrinks, setUserDrinks] = useState([]);
  const [selectedFilter, setSelectedFilter] = useState('all');

  useEffect(() => {
    // Fetch user drinks when the component mounts
    async function fetchUserDrinks() {
      try {
        const drinks = await getUserDrinks(userId); // Fetch all user drinks
        // Filter the drinks based on the selected filter
        const filteredDrinks = filterDrinksByDate(drinks, selectedFilter);

        const sortedDrinks = filteredDrinks.sort(
            (a, b) => new Date(b.dateConsumed) - new Date(a.dateConsumed)
          );
        setUserDrinks(filteredDrinks);
      } catch (error) {
        console.error('Error fetching user drinks:', error);
      }
    }

    fetchUserDrinks();
  }, [userId, selectedFilter]);

  const handleFilterChange = (filter) => {
    setSelectedFilter(filter);
  };

  // Function to filter drinks by date

const filterDrinksByDate = (drinks, filter) => {
    if (filter === 'all') {
      return drinks;
    } else {
      const currentDate = new Date();
      currentDate.setHours(0, 0, 0, 0);
  
      if (filter === 'week') {
        const oneWeekAgo = new Date(currentDate);
        oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);
        return drinks.filter((drink) => new Date(drink.dateConsumed) >= oneWeekAgo);
      } else if (filter === 'month') {
        const oneMonthAgo = new Date(currentDate);
        oneMonthAgo.setMonth(oneMonthAgo.getMonth() - 1);
        return drinks.filter((drink) => new Date(drink.dateConsumed) >= oneMonthAgo);
      } else if (filter === 'year') {
        const oneYearAgo = new Date(currentDate);
        oneYearAgo.setFullYear(oneYearAgo.getFullYear() - 1);
        return drinks.filter((drink) => new Date(drink.dateConsumed) >= oneYearAgo);
      }
    }
  };
  

  return (
    <div>
      <h2>Your Drinks</h2>

      {/* Render the TimeFilter component */}
      <DropdownDate onFilterChange={handleFilterChange} />

      <ul>
        {userDrinks.map((drink) => (
          <li key={drink._id}>
            {drink.type.name} - {drink.numConsumptions} consumptions -{' '}
            {new Date(drink.dateConsumed).toLocaleString()} {/* Display the date */}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FilteredStats;
