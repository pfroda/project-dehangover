import React, { useState, useEffect } from 'react';
import { useAuth } from '../../context/AuthContext'; 
import { useDrink } from '../../context/DrinksContext';
import { useHangover } from '../../context/HangoversContext';
import DropdownDate from '../dropdown_date/DropdownDate';
import { Circle } from 'rc-progress';
import { setHangoverColor } from '../../utils/utils';
import { filterDrinksByDate, filterHangoversByDate } from '../../utils/utils';
import 'react-circular-progressbar/dist/styles.css';
import './filteredstats.css';

// DIRTY

function FilteredStats() {
  const { user } = useAuth();
  const { userDrinks, getDrinks } = useDrink();
  const { userHangovers, getHangovers } = useHangover();
  const [selectedFilter, setSelectedFilter] = useState('week');


 // drinks stats
  const [userFilteredDrinks, setUserFilteredDrinks] = useState([]);
  const [totalDrinks, setTotalDrinks] = useState(0);
  const [mostConsumedType, setMostConsumedType] = useState(null);
  const [mostConsumedTypes, setMostConsumedTypes] = useState([])
  const [selectedType, setSelectedType] = useState(null);
  const [avgScoreFilteredHangovers, setAvgScoreFilteredHangovers] = useState(0);

  // hangover stats
  const [userFilteredHangovers, setUserFilteredHangovers] = useState([]);
  const [totalHangovers, setTotalHangovers] = useState(0)


  useEffect(() => {

    getDrinks(user.id);
    getHangovers(user.id);
    

    async function calculateUserStats() { //filterUserDrinks
      try {

        if (userDrinks.length === 0) {
          await getDrinks(user.id);
        }
        if (userHangovers.length === 0) {
          await getHangovers(user.id);
        }
  
        // DRINKS //

        // Filter the drinks based on the selected filter
        const filteredDrinks = filterDrinksByDate(userDrinks, selectedFilter);
        setUserFilteredDrinks(filteredDrinks);

        // Calculate total and most consumed type on selected filter

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

         // Convert the object into array of objects
        const mostConsumedTypesArray = Object.entries(filteredDrinksByType).map(
        ([type, count]) => ({ type, count })
        );
  
        mostConsumedTypesArray.sort((a, b) => b.count - a.count);
        setMostConsumedTypes(mostConsumedTypesArray)


        // HANGOVERS
    
          // Filter hangovers based on selected date filter
        const filteredHangovers = filterHangoversByDate(userHangovers, selectedFilter);
        setUserFilteredHangovers(filteredHangovers);

        const totalFilteredHangovers = filteredHangovers.length;
        setTotalHangovers(totalFilteredHangovers)


        const avgScoreFilteredHangovers = filteredHangovers.reduce((accumulator, hangover) => {
          return accumulator + hangover.hangoverScore}, 0) / totalFilteredHangovers;
  
          setAvgScoreFilteredHangovers(avgScoreFilteredHangovers)
      
      } catch (error) {
        console.error('Error calculating user stats:', error);
      }
    }

    calculateUserStats();
   
  }, [selectedFilter, user.id]);

  // , userDrinks, userHangovers, getDrinks, getHangovers


  // Get filter change from child - dropdown.date
  const handleFilterChange = (filter) => {
    setSelectedFilter(filter);
  };


  return (
    <div className='filtered-stats'>

        <h2>Hey {user.firstname}, {selectedFilter !== 'all' ? (
<span>this {selectedFilter}</span>
) : (
<span>in total</span>
)} you've had <span id="underline">{totalHangovers}</span> hangovers</h2>

      <DropdownDate onFilterChange={handleFilterChange} />
      
      <div className="hangover-stats">
      <div className="hangover-circle-num">
      <h4>{(avgScoreFilteredHangovers > 0) ? avgScoreFilteredHangovers.toFixed(2) : 0}</h4>

      <p>Avg. Hangover</p>
      </div>

      <div className="hangover-circle">

      <Circle
      percent={avgScoreFilteredHangovers* 10}
      strokeWidth={5.5}
      trailWidth={5.5}
      strokeColor={setHangoverColor(avgScoreFilteredHangovers)} /> 
      </div>
      </div>

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
            <p className='numeric-stats-num'>{(totalDrinks/(totalHangovers || 1)).toFixed(0)}</p>
            <p>Avg. Drinks/Nights out</p>
            </div>
        </div>
        <div>

  <h4>Most Consumed Drinks</h4>
  <div className="most-consumed-selection">
    {mostConsumedTypes.slice(0,3).map((consumed) => {
      const userDrink = userDrinks.find((drink) => drink.type.name === consumed.type);
      return (
        <div key={consumed.type} className="consumed-type">
          {userDrink && (
            <>
              <img src={`/assets/drinks/${userDrink.type.imageUrl}`} alt={consumed.type} onClick={()=>setSelectedType(consumed)}/>
            </>
          )}
        </div>
      );
    })}
  </div>
</div>

{selectedType && (
  <div className="selected-type-data">
    <h5>{selectedType.type}</h5>

    {userDrinks
      .filter((drink) => drink.type.name === selectedType.type)
      .sort((a, b) => new Date(b.dateConsumed) - new Date(a.dateConsumed))
      .map((drink) => (
        <p key={drink._id}>Last consumed: {new Date(drink.dateConsumed).toLocaleDateString()}</p>
      ))[0]}

    <p>Total consumptions: {
      userDrinks
        .filter((drink) => drink.type.name === selectedType.type)
        .reduce((total, drink) => total + drink.numConsumptions, 0)
    }</p>
  </div>
)}
    </div>
  );
}

export default FilteredStats;