import React, { useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.js";

export const Button_Services = props => {
	const { store, actions } = useContext(Context);

	/* useEffect(
		() => {
			console.log(props.service, "en use efeect");
			actions.getTypeServices(props.service);
		},
		[store.render]
	); */

	return (
		<Link to="/services">
			<button type="button" onClick={() => actions.getTypeServices(props.service)}>
				{props.service}
			</button>
		</Link>
	);
};

Button_Services.propTypes = {
	service: PropTypes.string
};
