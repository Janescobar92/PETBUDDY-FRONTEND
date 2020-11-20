import React, { Component } from "react";
import { StartRating } from "/workspace/PETBUDDY-FRONTEND/src/js/component/starsReview.js";
import "/workspace/PETBUDDY-FRONTEND/src/styles/editReviewCss.scss";

export function CardReview(props) {
	return (
		<div className="card" style={{ width: "25rem" }}>
			<div className="card-body">
				<StartRating />
				<textarea className="form-control" aria-label="With textarea" />
				<button type="button" className="btn mt-3">
					Send
				</button>
			</div>
		</div>
	);
}
