import React from 'react';
import Searchbar from '../../components/searchbar_types/Searchbar';
import ListDrinks from '../../components/list_userdrinks/ListDrinks';
import HangoverForm from '../../components/hangoverform/HangoverForm';
import Navbar from '../../components/navbar/Navbar';

function Drinks() {
  return (
    <div>Drinks
      <Searchbar ></Searchbar>
      <ListDrinks></ListDrinks>
      <HangoverForm></HangoverForm>
      <Navbar/> 
    </div>
  )
}

export default Drinks