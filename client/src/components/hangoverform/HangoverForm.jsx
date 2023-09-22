import React, { useState } from 'react';
import { useHangover } from '../../context/HangoversContext';
import { Link, useNavigate } from 'react-router-dom';
import './hangoverform.css';

function HangoverForm() {
    const { postHangovers } = useHangover();
    const [rating, setRating] = useState(0);
    const [barWidth, setBarWidth] = useState(0);
  
    const handleRatingClick = (event) => {
      const rect = event.target.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const percent = (x / rect.width) * 100;
      const calculatedRating = (percent / 100) * 10; // Assuming a scale of 0 to 10
      setRating(calculatedRating.toFixed(1)); // Round to one decimal place
      setBarWidth(percent);
    };
  
    const getColor = () => {
      // Calculate color gradient based on rating position
      if (barWidth >= 75) return "red";
      if (barWidth >= 50) return "yellow";
      if (barWidth >= 25) return "orange";
      return "green";
    };
  
    return (
      <div className="rating-input">
        <div
          className="rating-bar"
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
        <p>Rating: {rating}</p>
      </div>
    );
  };

      
//   return (
//     <div className='HangoverForm'>
//         <h2>Rate hangover</h2>
//         <div className="rating-bar">
//         {Array.from({ length: 10 }).map((_, index) => (
//           <div
//             key={index}
//             className={`rating-star ${index < rating ? "selected" : ""}`}
//             onClick={() => handleRatingClick(index + 1)}
//           >
//             {index + 1}
//           </div>
//         ))}
//       </div>
//       <p>Rating: {rating}</p>

//     </div>
//   )


export default HangoverForm