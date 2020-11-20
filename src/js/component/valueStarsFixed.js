import React, { useState } from "react";
import StarRatingComponent from "react-star-rating-component";
import { render } from "react-dom";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "/workspace/PETBUDDY-FRONTEND/src/styles/Rating.scss";

export const ValueStarsFixed = props => {
	const [rating, setRating] = useState(null);

	return (
		<div>
			{[...Array(props.review)].map((start, i) => {
				return (
					<label key="valueRatingStar">
						<i className="fas fa-paw reviewPoints" />
					</label>
				);
			})}
		</div>
	);
};

ValueStarsFixed.propTypes = {
	review: PropTypes.float
};
