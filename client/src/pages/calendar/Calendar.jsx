import React from 'react'
import CalendarDates from '../../components/calendar/CalendarDates';
import Navbar from '../../components/navbar/Navbar';

function Calendar() {
  return (
    <div className='Calendar'>
      <h2>Check out all your <span id="underline">previous hangovers</span></h2>
      <CalendarDates ></CalendarDates>
      <Navbar/> 
    </div>
  )
}

export default Calendar