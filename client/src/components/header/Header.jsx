import React from 'react';
import { NavLink } from 'react-router-dom';
import './header.css'
import logo from '../../assets/images/dehangover_logo.png'

function Header() {
  return (
    <div className='Header'>
        <div className='header header-general'>
            <h5>DeHangover</h5>
            <div className="logo-container"></div>
            <img src={logo} alt="logo" className='logo' />
        </div>
    </div>
  )
}

export default Header;