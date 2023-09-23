import React from 'react';
import { NavLink } from 'react-router-dom';
import { ReactSVG } from "react-svg";
import './navbar.css';
import calendarIcon from '../../assets/icons/icon_calendar.svg';
import drinksIcon from '../../assets/icons/icon_drinks.svg';
import statsIcon from '../../assets/icons/icon_stats.svg';

function Navbar() {
    return (
        <div className='Navbar sticky'>
            <div className="navbar-icons">
                <NavLink to='/calendar' activeclassname='active'>
                    <ReactSVG src={calendarIcon} alt="calendar" />
                </NavLink>
                <NavLink to='/drinks' activeclassname='active'>
                    <ReactSVG src={drinksIcon} alt="drinks" />
                </NavLink>
                <NavLink to='/stats' activeclassname='active'>
                    <ReactSVG src={statsIcon} alt="stats" />
                </NavLink>
            </div>
        </div>
    );
}

export default Navbar;
