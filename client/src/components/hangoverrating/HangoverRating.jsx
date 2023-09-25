import React, { useState } from 'react';
import './hangoverrating.css';

function HangoverRating({handleRatingChange }) {
    const [rating, setRating] = useState(0);
    const [barWidth, setBarWidth] = useState(0);
  
    const handleRatingClick = (event) => {
      const rect = event.target.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const percent = (x / rect.width) * 100;
      const calculatedRating = ((percent / 100) * 10).toFixed(1);
      setRating(calculatedRating)
      handleRatingChange(calculatedRating);
      console.log(calculatedRating);
      setBarWidth(percent);
    };

    const getColor = () => {
      // Calculate color based on rating click
      if (barWidth >= 75) return "#c0564a";
      if (barWidth >= 50) return "#fdc52b";
      if (barWidth >= 25) return "#ffe9ad";
      return "#81b44c";
    };
  
    return (
        <>

      <div className="rating-input">
        <p>Rating: {rating} / 10</p>
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