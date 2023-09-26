import React from 'react';
import Searchbar from '../components/searchbar_types/Searchbar';
import ListDrinks from '../components/list_userdrinks/ListDrinks';
import HangoverForm from '../components/hangoverform/HangoverForm';
import Navbar from '../components/navbar/Navbar';
import HangoverPrediction from '../components/hangoverprediction/HangoverPrediction'

function Drinks() {
  return (
    <div>
      <h2>What are you <span id="underline">drinking</span> today?</h2>
      <Searchbar ></Searchbar>
      <ListDrinks></ListDrinks>
      <HangoverPrediction></HangoverPrediction>
      <HangoverForm></HangoverForm>
      <Navbar/> 
    </div>
  )
}

export default Drinks