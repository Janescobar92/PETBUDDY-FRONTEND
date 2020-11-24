import React from "react";
import "../../styles/jumbotron.scss";
import PropTypes from "prop-types";

export const ProfilePicture = props => {
	return (
		<div>
			<div className="jumbotron-profile-picture-shape">
				<img src={props.imgSrc} alt="Profile picture" />
			</div>
		</div>
	);
};
ProfilePicture.propTypes = {
	imgSrc: PropTypes.string
};
