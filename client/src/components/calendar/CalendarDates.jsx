import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import { useAuth } from '../../context/AuthContext';
import { useDrink } from '../../context/DrinksContext'; 
import { useHangover } from '../../context/HangoversContext';
import { format, isSameDay, parseISO, differenceInHours } from 'date-fns';
import { Line } from 'rc-progress';
import { setHangoverColor } from '../../utils/utils';
import './calendardates.css';

export default function CalendarDates() {
  const { user } = useAuth();
  const { userDrinks, getDrinks } = useDrink();
  const { userHangovers, getHangovers } = useHangover();
  const [date, setDate] = useState(new Date());

  const [hangoverScore, setHangoverScore] = useState(0)

  useEffect(() => {
    getDrinks(user.id);
    getHangovers(user.id);
 
    
  }, []);


  const mostRecentHangoverDate = userHangovers.length > 0 ? userHangovers[userHangovers.length - 1].hangoverDate : null;

  const getDrinksForSelectedDate = () => {
    const drinksForLast24Hours = userDrinks.filter((drink) => {
      const drinkDate = new Date(drink.dateConsumed);
      const hoursDifference = differenceInHours(date, drinkDate);
      return hoursDifference >= 0 && hoursDifference <= 24;
    });

    return drinksForLast24Hours;
  };

  const getHangoversForSelectedDate = () => {
    const dateHangovers = userHangovers.filter((hangover) => 
      isSameDay(parseISO(hangover.hangoverDate), date)
    );
    return dateHangovers
 
  }

  const handleDateChange = (newDate) => {
    setDate(newDate);
  };

  // Changing calendar tiles color in relation to its hangover score
  const tileClassName = ({ date }) => {
    const wildHangoverDates = userHangovers
    .filter((hangover) => hangover.hangoverScore > 7.5)
    .map((hangover) => format(new Date(hangover.hangoverDate), 'yyyy-MM-dd'));
 
    const highHangoverDates = userHangovers
    .filter((hangover) => hangover.hangoverScore > 5)
    .map((hangover) => format(new Date(hangover.hangoverDate), 'yyyy-MM-dd'));
    
    const midHangoverDates = userHangovers
    .filter((hangover) => hangover.hangoverScore > 2.5)
    .map((hangover) => format(new Date(hangover.hangoverDate), 'yyyy-MM-dd'));

    const goodHangoverDates = userHangovers
    .filter((hangover) => hangover.hangoverScore >= 0.1)
    .map((hangover) => format(new Date(hangover.hangoverDate), 'yyyy-MM-dd'));

    const formattedDate = format(date, 'yyyy-MM-dd');

    if (wildHangoverDates.includes(formattedDate)) return 'wild-highlight'
    else if (highHangoverDates.includes(formattedDate)) return 'high-highlight';
    else if (midHangoverDates.includes(formattedDate)) return 'mid-highlight';
    else if (goodHangoverDates.includes(formattedDate)) return 'good-highlight';
    return '';
  };
  

  return (
    <div className="CalendarDates">
      <div className="calendar-container">
        <Calendar onChange={handleDateChange}
        value={date}
        locale="en-GB"
        tileClassName={tileClassName}
        />
      </div>

      <div className="hangover-details">

        {getHangoversForSelectedDate().map((hangover, index) => (
          <>
          <h4>Your hangover score:</h4>
          <Line
          percent={hangover.hangoverScore*10} strokeWidth={2.5}
          trailWidth={2.5}
          strokeColor={setHangoverColor(hangover.hangoverScore)} />
          <h3 key={index}>{hangover.hangoverScore} / 10</h3>
          <h4>You wrote:</h4>
          <div className="hangover-comments">
          <p>{hangover.hangoverComments}</p>
          </div>
          </>
        ))}
</div>

      <div className="drink-list">
        {getHangoversForSelectedDate().length > 0 ? (
          <>
        <h4>The previous night you drunk...</h4>
        <ul>
          {getDrinksForSelectedDate().map((drink, index) => (
                  <li key={drink._id} className='listed-drinks'>
                  <div className="listed-drinks-image">
                    <img src={`/assets/drinks/${drink.type.imageUrl}`} alt="" />
                  </div>
                  <div className='listed-drinks-details'>
                    {drink.numConsumptions} {drink.type.name} 
                    <div className='listed-drinks-date'>
                      {format(new Date(drink.dateConsumed), 'dd MMM - HH:mm\'h\'')}
                    </div></div>
                </li>))}
        </ul>
          </>
        ) : (
          <p>No hangovers here :)</p>
        )  
      }
      </div>
    </div>
  );
}