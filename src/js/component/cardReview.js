import React, { Component } from "react";
import { Button, Form, Card } from "react-bootstrap";
import { StartRating } from "/workspace/PETBUDDY-FRONTEND/src/js/component/starsReview.js";

export function CardReview(props) {
	return (
		<div className="card" style={{ width: "25rem" }}>
			<div className="card-body">
				<StartRating />
				<textarea className="form-control" aria-label="With textarea" />
				<button type="button" className="btn btn-secondary">
					Send
				</button>
			</div>
		</div>
	);
}
