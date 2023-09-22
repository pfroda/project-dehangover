import React, { useState } from 'react';
import './hangoverrating.css';

function HangoverRating({handleRatingChange }) {
    const [rating, setRating] = useState(0);
    const [barWidth, setBarWidth] = useState(0);
  
    const handleRatingClick = (event) => {
      const rect = event.target.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const percent = (x / rect.width) * 100;
      const calculatedRating = ((percent / 100) * 10).toFixed(2);
      setRating(calculatedRating)
      handleRatingChange(calculatedRating);
      console.log(calculatedRating);
      // console.log(rating)
      setBarWidth(percent);
    };

    // if (onRatingChange) {
    //   onRatingChange(calculatedRating.toFixed(1));
    // }
  
  
    const getColor = () => {
      // Calculate color gradient based on rating position
      if (barWidth >= 75) return "red";
      if (barWidth >= 50) return "yellow";
      if (barWidth >= 25) return "orange";
      return "green";
    };
  
    return (
        <>

      <div className="rating-input">
        <p>Rating: {rating}</p>
        <div
          className="rating-bar" onMouseEnter={(event) => handleRatingClick(event)}
          onClick={(event) => handleRatingClick(event)}
        >
          
          <div
            className="filler-bar"
            style={{
              width: `${barWidth}%`,
              backgroundColor: getColor(),
            }}
            
          ></div>
        </div>
        
      </div>
        
        </>

    );
  };



export default HangoverRating;