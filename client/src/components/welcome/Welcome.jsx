import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import welcomepic from '../../assets/images/dehangover_welcome.png';
import './welcome.css'

function Welcome() {
    const { user } = useAuth();

  return (
    <div className='Welcome'>
        <h2>Hey, <span id='underline'>welcome</span> to DeHangover</h2>
        <h3>DeHangover helps you understand your drinking habits by keeping track of your nights out - and tomorrow's hangovers.</h3>
        <img src={welcomepic} alt="welcomepic" />
        <div className='welcome-highlight'>
            <div className='highlight-image'>
                <img src="" alt="" />
            </div>
            <div className="highlight-text">
                <h4>Start your night</h4>
                <h3>Ready for some good old-fashioned drunk fun? Kick off your journey now. <span><Link to='/drinks'>Have a drink!</Link></span></h3>
            </div>
        </div>
    </div>
  )
}

export default Welcome