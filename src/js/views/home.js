import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { StartRating } from "../component/starsReview.js";
import { EditReview } from "../component/editReview.js";

export const Home = () => (
	<div className="text-center margin-5">
		<EditReview />
		<h1>Hello Rigo!</h1>
		<p>
			<img src={rigoImage} />
		</p>
		<a href="#" className="btn btn-success">
			If you see this green button, bootstrap is working
		</a>
	</div>
);
