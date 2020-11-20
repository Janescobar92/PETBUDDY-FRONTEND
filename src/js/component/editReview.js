import React, { Component } from "react";
import { Button, Form, Card } from "react-bootstrap";
import { StartRating } from "/workspace/PETBUDDY-FRONTEND/src/js/component/starsReview.js";
import "/workspace/PETBUDDY-FRONTEND/src/styles/editReviewCss.scss";

export function EditReview(props) {
	return (
		<div className="card col-lg-4 col-sm-6">
			<div className="card-body">
				<StartRating />
				<textarea className="form-control" aria-label="With textarea" />
				<button type="button" className="btn mt-3 mr-2">
					Delete
				</button>
				<button type="button" className="btn mt-3 ml-2">
					Edit
				</button>
			</div>
		</div>
	);
}
