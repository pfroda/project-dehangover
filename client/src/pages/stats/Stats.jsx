import React from 'react'
import DropdownDate from '../../components/dropdown_date/DropdownDate';
import FilteredStats from '../../components/filtered_stats/FilteredStats';

function Stats() {
  return (
    <div className='Stats'>Stats
    <DropdownDate></DropdownDate>
    <FilteredStats userId={'757365725f69645f68657265'}></FilteredStats></div>
  )
}

export default Stats