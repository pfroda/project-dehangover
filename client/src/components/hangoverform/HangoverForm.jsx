import React, { useState } from 'react';
import { useHangover } from '../../context/HangoversContext';
import HangoverRating from '../hangoverrating/HangoverRating';

import './hangoverform.css';

function HangoverForm() {
    const { postHangovers } = useHangover();

    // const [comment, setComment] = useState("");
    const [rating, setRating] = useState(0);

    const handleRatingChange = (newRating) => {
        setRating(newRating);
    };

    async function handleSubmit (event) {
        event.preventDefault();


        const hangoverData = {
            hangoverComments: event.target.comments.value,
            hangoverScore: rating
        }
        console.log(hangoverData)
        await(postHangovers(hangoverData))
    }

  return (
    <div className='HangoverForm'>

        <form onSubmit={handleSubmit} className='hangover-form'>
        <div className="form-group">
            <label>Rate your Hangover</label>
            <HangoverRating handleRatingChange={handleRatingChange} name="score"/>
            <label>How are you feeling?</label>
            <input type="text" id="comments-input"name="comments"placeholder="Add your comments here"></input>
            <button onSubmit={handleSubmit}>Rate hangover</button>

        </div>
        </form>

    </div>
  )
}

export default HangoverForm