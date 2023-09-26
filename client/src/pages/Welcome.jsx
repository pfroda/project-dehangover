import React from 'react';
import Intro from '../components/intro/Intro';
import Navbar from '../components/navbar/Navbar';

function Welcome() {

  return (
    <div className="Welcome">
      <Intro></Intro>
      <Navbar></Navbar>
    </div>
  )
}

export default Welcome