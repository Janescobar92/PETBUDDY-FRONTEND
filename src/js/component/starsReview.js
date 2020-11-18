import ReactStars from "react-rating-stars-component";
import React from "react";
import { render } from "react-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const StartRating = () => {
    return (
        <div>
            {[...Array(5)].map((start) => {
                return (<label>
                    <input type="radio" name="rating" />
                    <i className="fas fa-paw, reviewPoints"></i> </label>)

            })}
        </div>
    )
}