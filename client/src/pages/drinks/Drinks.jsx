import React from 'react';
import Searchbar from '../../components/searchbar_types/Searchbar';
import ListDrinks from '../../components/list_userdrinks/ListDrinks';
import HangoverForm from '../../components/hangoverform/HangoverForm';

function Drinks() {
  return (
    <div>Drinks
      <Searchbar ></Searchbar>
      <ListDrinks></ListDrinks>
      <HangoverForm></HangoverForm>
    </div>
  )
}

export default Drinks