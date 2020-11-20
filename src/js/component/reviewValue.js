import React, { Component } from "react";
import { StartRating } from "/workspace/PETBUDDY-FRONTEND/src/js/component/starsReview.js";
import PropTypes from "prop-types";
import "/workspace/PETBUDDY-FRONTEND/src/styles/editReviewCss.scss";
import { ValueStarsFixed } from "../component/valueStarsFixed.js";

export function ReviewValue(props) {
	return (
		<div className="card col-sm-6 col-lg-4" style={{ width: "25rem" }}>
			<div className="card-body">
				<ValueStarsFixed review={props.patitas} />
				<p className="lead">{props.userName}</p>
				<p className="subtitle">{props.platano}</p>
				<p className="lead">{props.text}</p>
			</div>
		</div>
	);
}

ReviewValue.propTypes = {
	userName: PropTypes.string,
	text: PropTypes.string,
	platano: PropTypes.string,
	patitas: PropTypes.float
};
