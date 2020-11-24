import React from "react";
import { ProfilePicture } from "../component/profilepicture.jsx";
import "../../styles/jumbotron.scss";
import PropTypes from "prop-types";

export const Jumbotron = props => {
	return (
		<div>
			<div className="jumbotron-background-wave ">
				<div className="jumbotron-text-align">
					<h1>{props.title}</h1>
					<h2>{props.subtitle}</h2>
				</div>
				<div className="jumbotron-img-align">
					<ProfilePicture imgSrc={props.img} />
				</div>
			</div>
		</div>
	);
};
Jumbotron.propTypes = {
	title: PropTypes.string,
	subtitle: PropTypes.string,
	img: PropTypes.string
};
