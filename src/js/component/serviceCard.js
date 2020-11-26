import React, { useContext } from "react";

import { Context } from "../store/appContext.js";

import { Link } from "react-router-dom";

export const ServiceCard = () => {
	const { store, actions } = useContext(Context);
	const cards = store.services.map((service, index) => (
		<div className="service-body d-flex justify-content-center" key={index}>
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
					<strong>Precio:</strong> {service.price}
					€/h
				</p>
				<p>
					<strong>Horario:</strong> {service.schedule}
				</p>
			</div>
		</div>
	));
	return cards;
};
