import React from 'react'
import CalendarDates from '../components/calendar/CalendarDates';
import Navbar from '../components/navbar/Navbar';

function Calendar() {
  return (
    <div className='Calendar'>
      <h2>Check out your <span id="underline">hangover calendar</span></h2>
      <CalendarDates ></CalendarDates>
      <Navbar/> 
    </div>
  )
}

export default Calendar