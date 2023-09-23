import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import { useAuth } from '../../context/AuthContext';
import { useDrink } from '../../context/DrinksContext'; 
import { useHangover } from '../../context/HangoversContext';

import { format, isSameDay } from 'date-fns';
import './calendardates.css';

export default function CalendarDates() {
  const { user } = useAuth();
  const { userDrinks, getDrinks } = useDrink();
  const { userHangovers, getHangovers } = useHangover();
  const [date, setDate] = useState(new Date());

  const [hangoverScore, setHangoverScore] = useState(0)
// const [hangoverDates, setHangoverDates] = useState([])

  useEffect(() => {
    getDrinks(user.id);
    getHangovers(user.id);
 
    // console.log(hangoverDates)
    
  }, []);

  // setHangoverDates(userHangovers.map(hangover => new Date(hangover.hangoverDate)));

  // Filter drinks & hangovers for the selected date
  const getDrinksForSelectedDate = () => {
    const dateDrinks = userDrinks.filter((drink) =>
      isSameDay(new Date(drink.dateConsumed), date)
    );

    return dateDrinks;
  };

  const getHangoversForSelectedDate = () => {
    const dateHangovers = userHangovers.filter((hangover) => 
      isSameDay(new Date(hangover.hangoverDate), date)
    );
    return dateHangovers
 
  }

  const handleDateChange = (newDate) => {
    setDate(newDate);
  };




  // const getColor = () => {
  //   // Calculate color based on rating click
  //   if (barWidth >= 75) return "#c0564a";
  //   if (barWidth >= 50) return "#fdc52b";
  //   if (barWidth >= 25) return "#ffe9ad";
  //   return "#81b44c";
  // };



  return (
    <div className="CalendarDates">
      {/* <h1 className="header">React Calendar</h1> */}
      <div className="calendar-container">
        <Calendar onChange={handleDateChange}
        value={date}
        locale="en-GB"
        // tileClassName={({date, view}) => {
        //   if(hangoverDates.some(hangoverDate => isSameDay(hangoverDate, date))) {
        //     console.log('Date matched:', date);
        //     return 'highlight-red'
        //   }
        // }}
        />
      </div>

  
      <div className="hangover-details">


        {getHangoversForSelectedDate().map((hangover, index) => (
          
          <>
          <h4>Your hangover score:</h4>
          <h4 key={index}>{hangover.hangoverScore}</h4>
          <h4>Your wrote:</h4>
          <div className="hangover-comments">
          <p>{hangover.hangoverComments}</p>

          </div>
          

        {/* 
        <div key={index} className="hangover-date-score">

        <div className="filler-bar" style={{
              width: `${hangover.hangoverScore}%`,
              backgroundColor: "black",
            }}>
        </div>

        </div> */}
          </>

        ))}

</div>

      <div className="drink-list">
        {/* <h4>On {format(date, 'EEEE dd MMM')} you drunk...</h4> */}

        {getDrinksForSelectedDate().length > 0 ? (
          <>
          
        <h4>The previous night you drunk...</h4>
        <ul>
          {getDrinksForSelectedDate().map((drink, index) => (
                  <li key={drink._id} className='listed-drinks'>
                  <div className="listed-drinks-image">
                    <img src={`/assets/drinks/${drink.type.imageUrl}`} alt="" />
                  </div>
                  <div className='listed-drinks-details'>
                    {drink.numConsumptions} {drink.type.name} -
                    <div className='listed-drinks-date'>
                      {format(new Date(drink.dateConsumed), 'dd MMM - HH:mm\'h\'')}
                    </div></div>
                </li>))}
        </ul>
          
          </>
        ) : (
          <p>No hangovers that day :)</p>
        )
        
      }

      </div>







    </div>
  );
}



// {userDrinks ? (
//   <ul>
//     {userDrinks.map((drink) => (
      // <li key={drink._id} className='listed-drinks'>
      //   <div className="listed-drinks-image">
      //     <img src={`/assets/drinks/${drink.type.imageUrl}`} alt="" />
      //   </div>
      //   <div className='listed-drinks-details'>
      //     {drink.numConsumptions} {drink.type.name} -
      //     <div className='listed-drinks-date'>
      //       {format(new Date(drink.dateConsumed), 'dd MMM - HH:mm\'h\'')}
      //     </div>
      //   </div>
      // </li>
//     ))}
//   </ul>
// ) : (
//   <p>Loading...</p>
  
// )}