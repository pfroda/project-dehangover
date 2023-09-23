import React from 'react'
import CalendarDates from '../../components/calendar/CalendarDates';
import Navbar from '../../components/navbar/Navbar';


function Calendar() {
  return (
    <div className='Calendar'>
      <CalendarDates ></CalendarDates>
      <Navbar/> 
    </div>
  )
}

export default Calendar