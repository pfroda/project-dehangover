import React from 'react';
import Searchbar from '../../components/searchbar_types/Searchbar';
import ListDrinks from '../../components/list_userdrinks/ListDrinks';
import HangoverForm from '../../components/hangoverform/HangoverForm';
import Navbar from '../../components/navbar/Navbar';
import Header from '../../components/header/Header';

function Drinks() {
  return (
    <div>
      <Header></Header>
      <h2>What are you drinking today?</h2>
      <Searchbar ></Searchbar>
      <ListDrinks></ListDrinks>
      <HangoverForm></HangoverForm>
      <Navbar/> 
    </div>
  )
}

export default Drinks