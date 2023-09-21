import React, { useState, useEffect } from 'react';
import { getUserDrinks } from '../../services/apiDrink';
import './filteredstats.css';
import DropdownDate from '../dropdown_date/DropdownDate';

function FilteredStats({ userId }) {
  const [userDrinks, setUserDrinks] = useState([]);
  const [selectedFilter, setSelectedFilter] = useState('week');
  const [totalDrinks, setTotalDrinks] = useState(0);
  const [totalHangovers, setTotalHangovers] = useState(0)
  const [mostConsumedType, setMostConsumedType] = useState(null);


  useEffect(() => {
    
    async function fetchUserDrinks() {
      try {
         // Fetch all user drinks
        const drinks = await getUserDrinks(userId);
        // Filter the drinks based on the selected filter
        const filteredDrinks = filterDrinksByDate(drinks, selectedFilter);

        const sortedDrinks = filteredDrinks.sort(
            (a, b) => new Date(b.dateConsumed) - new Date(a.dateConsumed)
          );
        setUserDrinks(filteredDrinks);

        // Calculate most consumed type and total drinks on selected filter

        const filteredDrinksByType = {};
        let totalDrinks = 0;

        filteredDrinks.forEach((drink) => {
            totalDrinks += drink.numConsumptions;

            if(filteredDrinksByType[drink.type.name]) {
                filteredDrinksByType[drink.type.name]++
            } else {
                filteredDrinksByType[drink.type.name] = 1
            }
        })

        let MaxConsumedType = null;
        let MaxConsumedCount = 0;

        for (let type in filteredDrinksByType) {
            if (filteredDrinksByType[type] > MaxConsumedCount) {
                MaxConsumedCount = filteredDrinksByType[type];
                MaxConsumedType = type;
            }
            setMostConsumedType(MaxConsumedType);
            setTotalDrinks(totalDrinks);
        }


        
      } catch (error) {
        console.error('Error fetching user drinks:', error);
      }
    }

    fetchUserDrinks();
  }, [userId, selectedFilter]);

  const handleFilterChange = (filter) => {
    setSelectedFilter(filter);
  };

// Function calculate total drinks in time period



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

      <p>Total Drinks: {totalDrinks}</p>
      <p>Most consumed type: {mostConsumedType}</p>

      <ul>
        {userDrinks.map((drink) => (
          <li key={drink._id}>
            {drink.type.name} - {drink.numConsumptions} consumptions -{' '}
            {/* {new Date(drink.dateConsumed).toLocaleString()} Display the date - {drink.user} */}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FilteredStats;
