import React from "react";
import { ProfilePicture } from "../component/profilepicture.jsx";
import "../../styles/jumbotron.scss";

export const Jumbotron = () => {
	return (
		<div>
			<div className="jumbotron-background-wave ">
				<div className="jumbotron-text-align">
					<h1>Jan Carlo</h1>
					<h2>Escobar Rivera</h2>
				</div>
				<div className="jumbotron-img-align">
					<ProfilePicture />
				</div>
			</div>
		</div>
	);
};
