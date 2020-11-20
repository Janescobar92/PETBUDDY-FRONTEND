import React, { Component } from "react";
import { StartRating } from "/workspace/PETBUDDY-FRONTEND/src/js/component/starsReview.js";
import "/workspace/PETBUDDY-FRONTEND/src/styles/editReviewCss.scss";

export function ReviewValue(props) {
	return (
		<div className="card col-sm-6" style={{ width: "25rem" }}>
			<div className="card-body">
				<StartRating />
                <p className="subtitle">{props.userName}</p>
				<p className="lead">{props.text}</p>
			</div>
		</div>
	);
}

ReviewValue.propTypes = {
	userName: PropTypes.string,
	text: PropTypes.string
};