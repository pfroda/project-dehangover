import React from 'react'
import DropdownDate from '../../components/dropdown_date/DropdownDate';
import FilteredStats from '../../components/filtered_stats/FilteredStats';
import HangoverForm from '../../components/hangoverform/HangoverForm';
import Navbar from '../../components/navbar/Navbar';
import Header from '../../components/header/Header';

function Stats() {
  return (
    <div className='Stats'>
      <FilteredStats></FilteredStats>
      <Navbar/> 
    </div>
  )
}

export default Stats