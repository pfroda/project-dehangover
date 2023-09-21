import React from 'react';
import {useState} from 'react';
import Calendar from 'react-calendar';
// import 'react-calendar/dist/Calendar.css';
import './calendardates.css'

export default function CalendarDates() {
  const [date, setDate] = useState(new Date());

  return (
    <div className="CalendarDates">
      <h1 className="header">React Calendar</h1>
      <div className="calendar-container">
        <Calendar onChange={setDate} value={date}/>
      </div>
      <div className="text-center">
         Selected date: {date.toDateString()}
      </div>
    </div>
     )
}
