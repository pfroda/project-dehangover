import React, { useState, useEffect } from 'react';
import { getUserDrinks } from '../../services/apiDrink';
import './filteredstats.css';
import DropdownDate from '../dropdown_date/DropdownDate';
// import SearchDrink from '../search_drink/SearchDrink';

function FilteredStats({ userId }) {
  const [userDrinks, setUserDrinks] = useState([]);
  const [selectedFilter, setSelectedFilter] = useState('week');
  const [totalDrinks, setTotalDrinks] = useState(0);
  const [totalHangovers, setTotalHangovers] = useState(0)
  const [mostConsumedType, setMostConsumedType] = useState(null);
  const [mostConsumedTypes, setMostConsumedTypes] = useState([])


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

         // Convert the object into an array of objects
        const mostConsumedTypesArray = Object.entries(filteredDrinksByType).map(
        ([type, count]) => ({ type, count })
        );
  
        // Sort the array in descending order based on count
        mostConsumedTypesArray.sort((a, b) => b.count - a.count);
  
      // Get the top 5 most consumed types
      setMostConsumedTypes(mostConsumedTypesArray)
    //   const top5MostConsumedTypes = mostConsumedTypesArray.slice(0, 5);
    


        
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

      <DropdownDate onFilterChange={handleFilterChange} />
        <div className='numeric-stats'>
            <div className='numeric-stat-box numeric-stats-total'>
            <p className='numeric-stats-num'>{totalDrinks}</p>
            <p>Total Drinks</p>
            </div>

            <div className='numeric-stat-box numeric-stats-type'>
            <p className='numeric-stats-num'>{mostConsumedType}</p>
            <p>Most Consumed</p>
            </div>

            <div className='numeric-stat-box numeric-stats-average'>
            <p className='numeric-stats-num'>{mostConsumedType}</p>
            <p>Avg. Drink/Night out</p>
            </div>
        </div>

        <div>

  <h2>Most Consumed Drinks</h2>
  <div className="most-consumed-selection">
    {mostConsumedTypes.map((consumed) => {
      const userDrink = userDrinks.find((drink) => drink.type.name === consumed.type);
      return (
        <div key={consumed.type} className="consumed-type">
          {userDrink && (
            <>
              <img src={`/assets/drinks/${userDrink.type.imageUrl}`} alt={consumed.type} />
              <p>{consumed.type}</p>
            </>
          )}
        </div>
      );
    })}
  </div>
</div>

      
      <ul>
        {userDrinks.map((drink) => (
          <li key={drink._id}>
            {drink.type.name} - {drink.numConsumptions}
          </li>
        ))}
      </ul>

      {/* <SearchDrink onTypeSelect={handleTypeSelection}></SearchDrink> */}
    </div>
  );
}

export default FilteredStats;
