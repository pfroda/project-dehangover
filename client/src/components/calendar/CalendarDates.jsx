import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import { useAuth } from '../../context/AuthContext';
import { useDrink } from '../../context/DrinksContext'; 
import { format, isSameDay } from 'date-fns';
import './calendardates.css';

export default function CalendarDates() {
  const [date, setDate] = useState(new Date());

  const { user } = useAuth();
  const { userDrinks, getDrinks } = useDrink();

  useEffect(() => {
    getDrinks(user.id);
  }, []);

  // const fetchUserDrinks = async (userId) => {
  //   try {
  //     const drinks = await getUserDrinks(userId);
  //     setAllDrinksData(drinks);
  //   } catch (err) {
  //     console.error('Fetch error:', err);
  //     throw err;
  //   }
  // };

  const getDrinksForSelectedDate = () => {

    console.log(format(date, 'yyyy-MM-dd'));
    
    // Filter drinks for the selected date
    const dateDrinks = userDrinks.filter((drink) =>
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
