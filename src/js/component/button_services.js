import React, { useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.js";
import "../../styles/button_services.scss";

export const Button_Services = props => {
	const { store, actions } = useContext(Context);
	return (
		<Link to="/services">
			<button className="button_search" type="button" onClick={() => actions.getTypeServices(props.service)}>
				{props.service}
			</button>
		</Link>
	);
};

Button_Services.propTypes = {
	service: PropTypes.string
};
