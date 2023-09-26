import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import welcomepic from '../../assets/images/dehangover_welcome.png';
import './intro.css'

function Intro() {
    const { user } = useAuth();


  return (
    <div className='Intro'>
        <h2>Hey {user.firstname}, <span id='underline'>welcome</span> to DeHangover</h2>
        <h3>DeHangover helps you understand your drinking habits by keeping track of your nights out - and tomorrow's hangovers.</h3>
        <h3>Add whatever you're drinking and rate your hangover.</h3>
        <img src={welcomepic} alt="welcomepic" />
        <div className='welcome-highlight'>
            <div className="highlight-text">
                <h4>Start your night</h4>
                <h3>Ready for some good old-fashioned drunk fun? Begin your journey now. <span><Link to='/drinks'>Have a drink!</Link></span></h3>
            </div>
        </div>
    </div>
  )
}

export default Intro