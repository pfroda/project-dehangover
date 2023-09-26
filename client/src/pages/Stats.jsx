import React from 'react'
import FilteredStats from '../components/filtered_stats/FilteredStats';
import Navbar from '../components/navbar/Navbar';

function Stats() {
  return (
    <div className='Stats'>
      <FilteredStats></FilteredStats>
      <Navbar/> 
    </div>
  )
}

export default Stats