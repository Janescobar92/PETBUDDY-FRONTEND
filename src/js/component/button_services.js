import React, { useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.js";
import "../../styles/button_services.scss";
import "../../styles/landing.scss";

export const Button_Services = props => {
	const { store, actions } = useContext(Context);
	return (
		<Link to={"/services/" + props.service}>
			<div className={props.classStyle} onClick={() => actions.getTypeServices(props.service)}>
				{/* {props.service} */}
			</div>
		</Link>
	);
};

Button_Services.propTypes = {
	service: PropTypes.string,
	classStyle: PropTypes.string
};
