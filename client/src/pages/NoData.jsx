import React from 'react';
import Welcome from '../components/welcome/Welcome';
import Navbar from '../components/navbar/Navbar';

function NoData() {

  return (
    <div className="NoData">
      <Welcome></Welcome>
      <Navbar></Navbar>
    </div>
  )
}

export default NoData