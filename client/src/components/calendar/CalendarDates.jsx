import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import './calendardates.css';
import { getUserDrinks } from '../../services/apiDrink';
import { format, isSameDay } from 'date-fns';

// DONE IT MANUALLY TO TEST HOW IT WORKS, SHOULD USE USE CONTEXT-

export default function CalendarDates() {
  const [date, setDate] = useState(new Date());
  const [allDrinksData, setAllDrinksData] = useState([]);
  const userId = '757365725f69645f68657265'; // Replace with the actual user ID

  useEffect(() => {
    // Fetch all user's drinks initially
    fetchUserDrinks(userId);
  }, [userId]);

  const fetchUserDrinks = async (userId) => {
    try {
      const drinks = await getUserDrinks(userId);
      setAllDrinksData(drinks);
    } catch (err) {
      console.error('Fetch error:', err);
      throw err;
    }
  };

  const getDrinksForSelectedDate = () => {
    console.log(allDrinksData);
    console.log(format(date, 'yyyy-MM-dd'));
    
    // Filter drinks for the selected date
    const dateDrinks = allDrinksData.filter((drink) =>
      isSameDay(new Date(drink.dateConsumed), date)
    );

    return dateDrinks;
  };

  const handleDateChange = (newDate) => {
    setDate(newDate);
  };

  return (
    <div className="CalendarDates">
      <h1 className="header">React Calendar</h1>
      <div className="calendar-container">
        <Calendar onChange={handleDateChange} value={date} />
      </div>

      <div className="drink-list">
        <h2>Drinks for {date.toDateString()}</h2>
        <ul>
          {getDrinksForSelectedDate().map((drink, index) => (
            <li key={index}>{drink.type.name}</li>
            
          ))}
        </ul>
      </div>
    </div>
  );
}
