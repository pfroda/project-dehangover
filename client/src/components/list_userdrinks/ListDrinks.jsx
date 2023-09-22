import React, { useEffect, useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { useDrink } from '../../context/DrinksContext'; 
import { format } from 'date-fns';
import './listdrinks.css';

function ListDrinks() {
  const { user } = useAuth();
  const { userDrinks, getDrinks } = useDrink();

  useEffect(() => {
    
    // console.log('User ID:', user.id);
    getDrinks(user.id);
    // console.log('userDrinks:', userDrinks);
  }, [user, getDrinks]);
  
  function handleClick() {
    getDrinks(user.id);
    
  }

  return (
    <div>
      <h2>Your Drinks</h2>
      {userDrinks ? (
        <ul>
          {userDrinks.map((drink) => (
            <li key={drink._id} className='listed-drinks'>
              <div className="listed-drinks-image">
                <img src={`/assets/drinks/${drink.type.imageUrl}`} alt="" />
              </div>
              <div className='listed-drinks-details'>
                {drink.numConsumptions} {drink.type.name} -
                <div className='listed-drinks-date'>
                  {format(new Date(drink.dateConsumed), 'dd MMM - HH:mm\'h\'')}
                </div>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p>Loading...</p>
        
      )}
      {/* <button onClick={handleClick}>CLick me please</button> */}
      {/* <div>{userDrinks}</div> */}
    </div>
  );
}

export default ListDrinks;







// function ListDrinks({ userId }) {
//   const [userDrinks, setUserDrinks] = useState([]);

//   useEffect(() => {
//     // Fetch drinks based on the time filter
//     async function fetchUserDrinks() {
//       try {
//         const timeFilter = 'all'; // Change this to the desired time filter
//         const drinks = await getUserDrinks(userId, timeFilter); // Pass the timeFilter
//         setUserDrinks(drinks);
//       } catch (error) {
//         console.error('Error fetching user drinks:', error);
//       }
//     }
  
//     fetchUserDrinks();
//   }, [userId]);
  

//   return (
//     <div>
//       <h2>Your Drinks</h2>
//       <ul>
//         {userDrinks.map((drink) => (
//           <li key={drink._id} className='listed-drinks'>
//             <div className="listed-drinks-image">
//             <img src={`/assets/drinks/${drink.type.imageUrl}`} alt="" />
//             </div>
//             <div className='listed-drinks-details'>

//             {drink.numConsumptions} {drink.type.name} -
//             <div className='listed-drinks-date'>
//             {format(new Date(drink.dateConsumed), 'dd MMM - HH:mm\'h\'')}
//             </div>

//             </div>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default ListDrinks;
