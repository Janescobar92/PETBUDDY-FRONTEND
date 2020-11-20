import React, { useContext } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { StartRating } from "../component/starsReview.js";
import { EditReview } from "../component/editReview.js";
import { ReviewValue } from "../component/reviewValue.js";
import { Context } from "../store/appContext";

export const Home = () => {
	const { store, actions } = useContext(Context);
	return (
		<div className="text-center margin-5">
			<EditReview />
			{store.ReviewValue.map((value, index) => {
				return (
					<ReviewValue
						key={index}
						patitas={value.review}
						userName={value.write_by}
						platano={value.date}
						text={value.comment}
					/>
				);
			})}

			<h1>Hello Rigo!</h1>
			<p>
				<img src={rigoImage} />
			</p>
			<a href="#" className="btn btn-success">
				If you see this green button, bootstrap is working
			</a>
		</div>
	);
};
