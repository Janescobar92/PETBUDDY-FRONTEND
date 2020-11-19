import React, { Component } from "react";
import { Button, Form, Card } from "react-bootstrap";
import { StartRating } from "starsReview.js";

export function CardReview(props) {
	return (
		<div className="card">
			<div className="card-body">
				<StartRating />
				<p className="card-subtitle mb-2 text-muted">{props.userName}</p>
				<textarea className="form-control" aria-label="With textarea" />
				<button type="button" className="btn btn-secondary">
					Secondary
				</button>
			</div>
		</div>
	);
}

CardReview.propTypes = {
	userName: PropTypes.string
};
