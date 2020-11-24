import React from "react";
import { ProfilePicture } from "../component/profilePicture.js";
import "../../styles/jumbotron_profile.scss";
import PropTypes from "prop-types";

export const Jumbotron = props => {
	return (
		<div>
			<div className="jumbotron-background-wave ">
				<div className="jumbotron-text-align">
					<h1>{props.name}</h1>
					{/* <h2>{props.subtitle}</h2> */}
				</div>
				<div className="jumbotron-img-align">
					<ProfilePicture imgSrc={props.img} />
				</div>
			</div>
		</div>
	);
};
Jumbotron.propTypes = {
	name: PropTypes.string,
	/* subtitle: PropTypes.string, */
	img: PropTypes.string
};
