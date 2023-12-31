import React, { useState } from 'react';
import './dropdowndate.css'

function DropdownDate({onFilterChange}) {
    const [selectedFilter, setSelectedFilter] = useState('week');

    const handleFilterChange = (e) => {
        const filterValue = e.target.value;
        setSelectedFilter(filterValue);
        onFilterChange(filterValue);
    }

  return (
    <div className='filter-menu'>
      <div className="menu-options">
      <select id="timeFilter" 
      value={selectedFilter}
      onChange={handleFilterChange}>
        <option value="week">Week</option>
        <option value="month">Month</option>
        <option value="year">Year</option>
        <option value="all">All Time</option>
      </select>
        <p htmlFor="timeFilter" id="filter-info">Select your time filter</p>
      </div>
    </div>
  );
}

export default DropdownDate