import StarRatingComponent from "react-star-rating-component";
import React, { useState, Component } from "react";
import { render } from "react-dom";
import PetsIcon from "@material-ui/icons/Pets";

export const StartRating = () => {
	const [rating, setRating] = useState(null);
	const [hover, setHover] = useState(null);

	return (
		<div>
			{[...Array(5)].map((start, i) => {
				const ratingValue = i + 1;
				return (
					<label key="valueRatingStar">
						<input type="radio" name="rating" value={ratingValue} onClick={() => setRating(ratingValue)} />
						<PetsIcon
							classname="star"
							color={ratingValue < (hover || rating) ? "#fabf66" : "#ccd4e0"}
							sice={100}
							onMousseEnter={() => setHover(ratingValue)}
							onMousseLeave={() => setHover(ratingValue)}
						/>
					</label>
				);
			})}
			<p>The rating is {rating}.</p>
		</div>
	);
};
