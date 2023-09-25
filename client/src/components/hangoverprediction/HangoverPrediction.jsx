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

  const [tonightAlcohol, setTonightAlcohol] = useState(0);
  const [tonightTypes, setTonightTypes] = useState(0);
  const [totalAlcohol, setTotalAlcohol] = useState(0);
  // const [totalHangoverScores, setTotalHangoverScores] = useState(0);

  const [estimatedHangoverScore, setEstimatedHangoverScore] = useState(0);


  useEffect(() => {
    getDrinks(user.id);
    getHangovers(user.id);
    
  }, [user.id])

  useEffect(() => {
    // Calculate hangover score when userDrinks or userHangovers change
    calculatePrediction();
  }, [userDrinks, userHangovers]);

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

        const drinksBeforePreviousHangover = userDrinks.filter((drink) => new Date(drink.dateConsumed) < new Date(previousHangoverDate));


         // Log your intermediate values for debugging
    console.log('Total Hangover Scores:', totalHangoverScores);
    console.log('Previous Hangover Date:', previousHangoverDate);
    console.log('Drinks After Previous Hangover:', drinksAfterPreviousHangover);
    console.log('Drinks Before Previous Hangover:', drinksBeforePreviousHangover);

        // setTotalHangoverScores(totalScores);
        
        const tonightAlcoholConsumption = drinksAfterPreviousHangover.reduce((accumulator, drink) => {
          return accumulator + (drink.type.alcohol * drink.numConsumptions);
        }, 0);

        const totalAlcoholConsumption = drinksBeforePreviousHangover.reduce((accumulator, drink) => {
          return accumulator + (drink.type.alcohol * drink.numConsumptions);
        }, 0);

        const tonightDrinkTypes = new Set(drinksAfterPreviousHangover.map((drink) => drink.type.name)).size;

        console.log('Tonight Alcohol Consumption:', tonightAlcoholConsumption);
        console.log('Total Alcohol Consumption:', totalAlcoholConsumption);
        console.log('Tonight Drink Types:', tonightDrinkTypes);

        const estimatedHangoverScore = ((tonightAlcoholConsumption*totalHangoverScores)+(tonightDrinkTypes*0.1) / (totalAlcoholConsumption));
        console.log('total hangover scores', totalHangoverScores)

        setEstimatedHangoverScore(Math.min(Math.max(estimatedHangoverScore, 1), 10));
        console.log('hangover score: ', estimatedHangoverScore);

        
      } catch (err) {
        console.log(err)
      }
    }



    return (
      <>
        {userHangovers.length > 0 && (
          <>
            <h4>Tomorrow's predicted hangover:</h4>
    
            <Line
              percent={estimatedHangoverScore * 10}
              strokeWidth={2.5}
              trailWidth={2.5}
              strokeColor={setHangoverColor(estimatedHangoverScore)}
            />
            <h3>{estimatedHangoverScore} / 10</h3>
          </>
        )}
      </>
    )
}

export default HangoverPrediction