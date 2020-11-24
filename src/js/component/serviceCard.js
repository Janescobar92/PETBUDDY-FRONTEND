import React, { useContext } from "react";

import { Context } from "../store/appContext.js";

import { Link } from "react-router-dom";

export const ServiceCard = () => {
	const { store, actions } = useContext(Context);
	const cards = store.services.map((service, index) => (
		<div style={{ width: "18rem", margin: "auto", color: "black" }} key={index}>
			<div>{service.service}</div>
			<div>
				<h6>Descripcion:</h6>
				<p>{service.description}</p>
				<p>Price: {service.price}</p>
				<p>Schedule: {service.schedule}</p>
			</div>
		</div>
	));
	return cards;
};
