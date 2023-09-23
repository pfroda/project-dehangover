import React from 'react'
import CalendarDates from '../../components/calendar/CalendarDates';
import Navbar from '../../components/navbar/Navbar';
import Header from '../../components/header/Header';

function Calendar() {
  return (
    <div className='Calendar'>
      <Header></Header>
      <CalendarDates ></CalendarDates>
      <Navbar/> 
    </div>
  )
}

export default Calendar