import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { StartRating } from "../component/starsReview.js";
import { CardReview } from "../component/cardReview.js";

export const Home = () => (
	<div className="text-center mt-5">
		<CardReview />
		<h1>Hello Rigo!</h1>
		<p>
			<img src={rigoImage} />
		</p>
		<a href="#" className="btn btn-success">
			If you see this green button, bootstrap is working
		</a>
	</div>
);
