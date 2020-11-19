import React, { Component } from "react";
import { Button, Form, Card } from "react-bootstrap";
import { StartRating } from "/workspace/PETBUDDY-FRONTEND/src/js/component/starsReview.js";

export function CardReview(props) {
	return (
		<div className="card raw-10">
			<div className="card-body">
				<StartRating />
				{/* <p className="card-subtitle mb-2 text-muted">{props.userName}</p> */}
				<textarea className="form-control" aria-label="With textarea" />
				<button type="button" className="btn btn-secondary">
					Send
				</button>
			</div>
		</div>
	);
}

// CardReview.propTypes = {
// 	userName: PropTypes.string
// };
