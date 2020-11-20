import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export const Button_Services = props => {
	return (
		<Link to="/services">
			<button type="button">{props.service}</button>
		</Link>
	);
};

Button_Services.propTypes = {
	service: PropTypes.string
};
