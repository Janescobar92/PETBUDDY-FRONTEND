import React, { useContext } from "react";

import { Context } from "../store/appContext.js";

import { Link } from "react-router-dom";

export const ServiceCard = () => {
	const { store, actions } = useContext(Context);
	const cards = store.services.map((service, index) => (
		<div style={{ width: "19rem", margin: "auto", color: "black", fontSize: "1.1rem" }} key={index}>
			<div>
				<p>
					<strong>Servicio:</strong>
					{service.service}
				</p>
				<p>
					<strong>Descripcion:</strong>
				</p>
				<p> {service.description}</p>
				<p>
					<strong>Price:</strong> {service.price}
					€/h
				</p>
				<p>
					<strong>Schedule:</strong> {service.schedule}
				</p>
			</div>
		</div>
	));
	return cards;
};
