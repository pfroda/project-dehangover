import React, { useState, useEffect } from 'react';
import { useAuth } from '../../context/AuthContext';
import { useDrink } from '../../context/DrinksContext'; 
import { useHangover } from '../../context/HangoversContext';
import { Line } from 'rc-progress';
import { setHangoverColor } from '../../utils/utils';

function HangoverPrediction () {
  const { user } = useAuth();
  const { userDrinks, getDrinks } = useDrink();
  const { userHangovers, getHangovers } = useHangover();

  // const [tonightAlcohol, setTonightAlcohol] = useState(0);
  // const [tonightTypes, setTonightTypes] = useState(0);
  // const [totalAlcohol, setTotalAlcohol] = useState(0);

  const [addedDrinks, setAddedDrinks] = useState([])
  const [estimatedHangoverScore, setEstimatedHangoverScore] = useState(0);


  useEffect(() => {
    async function fetchData() {
      await getDrinks(user.id);
      await getHangovers(user.id);
      calculatePrediction();
    }

    fetchData();
  }, []); // Fetch data 

  useEffect(() => {
    calculatePrediction();
  }, [userDrinks, userHangovers]); // Calculate prediction when userDrinks or userHangovers change

    async function calculatePrediction() {
      try {
        if (userHangovers.length === 0) {
          setEstimatedHangoverScore(0);
          return
        }
        
        const totalHangoverScores = userHangovers.reduce((accumulator, hangover) => {
          return accumulator + hangover.hangoverScore
        },0);
        
        const previousHangoverDate = userHangovers[userHangovers.length - 1].hangoverDate;

        const drinksAfterPreviousHangover = userDrinks.filter((drink) => new Date(drink.dateConsumed) > new Date(previousHangoverDate));

        setAddedDrinks(drinksAfterPreviousHangover)

        const drinksBeforePreviousHangover = userDrinks.filter((drink) => new Date(drink.dateConsumed) < new Date(previousHangoverDate));
        
        const tonightAlcoholConsumption = drinksAfterPreviousHangover.reduce((accumulator, drink) => {
          return accumulator + (drink.type.alcohol * drink.numConsumptions);
        }, 0);
        console.log(drinksBeforePreviousHangover)
        console.log(drinksAfterPreviousHangover)
        console.log(tonightAlcoholConsumption)

        const totalAlcoholConsumption = drinksBeforePreviousHangover.reduce((accumulator, drink) => {
          return accumulator + (drink.type.alcohol * drink.numConsumptions);
        }, 0);

        console.log('total alcohol lasts hang', totalAlcoholConsumption);

        const tonightDrinkTypes = new Set(drinksAfterPreviousHangover.map((drink) => drink.type.name)).size;
        console.log('tonight drink types', tonightDrinkTypes)
        
        // adding variable drink types increases hangover
        const estimatedHangoverScore = ((tonightAlcoholConsumption*(totalHangoverScores/userHangovers.length))+(tonightDrinkTypes*0.1) / ((totalAlcoholConsumption)/userHangovers.length));
        console.log('estimated hangover', estimatedHangoverScore)
        setEstimatedHangoverScore(Math.min(Math.max(estimatedHangoverScore.toFixed(2), 0), 10));
        // console.log('hangover score: ', estimatedHangoverScore);
        console.log('calc', Math.min(Math.max(estimatedHangoverScore.toFixed(2), 0), 10))
        
      } catch (err) {
        console.log(err)
      }
    }

    return (
      <>
        {(userHangovers.length > 0 && addedDrinks.length>0) && (
          <>
            <h4>Tomorrow's expected hangover:</h4>
    
            <Line
              percent={estimatedHangoverScore * 10}
              strokeWidth={3.2}
              trailWidth={3.2}
              strokeColor={setHangoverColor(estimatedHangoverScore)}
            />
            <h3>{estimatedHangoverScore} / 10</h3>
          </>
        )}
      </>
    )
}

export default HangoverPrediction