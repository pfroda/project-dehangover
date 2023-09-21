import React from 'react';
import Searchbar from '../../components/searchbar_types/Searchbar';
import ListDrinks from '../../components/list_userdrinks/ListDrinks';

function Drinks() {
  return (
    <div>Drinks
      <Searchbar ></Searchbar>
      <ListDrinks userId={'757365725f69645f68657265'} ></ListDrinks>
    </div>
  )
}

export default Drinks