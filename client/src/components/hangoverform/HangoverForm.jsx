import React, { useState } from 'react';
import { useHangover } from '../../context/HangoversContext';
import { useDrink } from '../../context/DrinksContext'; 
import { useAuth } from '../../context/AuthContext';
import HangoverRating from '../hangoverrating/HangoverRating';

import './hangoverform.css';

function HangoverForm() {
    const { userHangovers, getHangovers, postHangovers } = useHangover();
    const { userDrinks, getDrinks } = useDrink();
    const { user } = useAuth();
    const [rating, setRating] = useState(0);
    const [formVisible, setFormVisible] = useState(false);
    const [submitted, setSubmitted] = useState(false);

//   const previousHangoverDate = userHangovers.length > 0 ? userHangovers[userHangovers.length - 1].hangoverDate : null;

//   const filteredUserDrinks = previousHangoverDate
//   ? userDrinks.filter((drink) => new Date(drink.dateConsumed) > new Date(previousHangoverDate))
//   : [];
    

    const handleRatingChange = (newRating) => {
        setRating(newRating);
    };

    const toggleFormVisibility = () => {
        setFormVisible(!formVisible);
    };

    async function handleSubmit (event) {
        event.preventDefault();

        const hangoverData = {
            user: user.id,
            hangoverScore: rating,
            hangoverComments: event.target.comments.value,
            hangoverDate: new Date()
        }

        try {
            console.log(hangoverData)
            await postHangovers(hangoverData);
            setSubmitted(true)

        } catch (error) {
            console.error('Error submitting form:', error)
        }
    }

    return (
        <div className='HangoverForm'>
            {!submitted ? (
                <p onClick={toggleFormVisibility}>Night's over? <span id="underline">Rate your hangover</span></p>
            ) : (
                <h3>Hangover rated! Now you can start another drinking night</h3> 
            )}

            {formVisible && !submitted && (
                <form onSubmit={handleSubmit} className='hangover-form'>
                    <div className="form-group">
                        <HangoverRating handleRatingChange={handleRatingChange} name="score" />
                        <textarea type="text" id="comments-input" name="comments" placeholder="Add your comments here"></textarea>
                        <button type="submit">Rate hangover</button>
                    </div>
                </form>
            )}
        </div>
    )
}

export default HangoverForm;