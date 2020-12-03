import React, { useContext, useEffect } from "react";

import { Context } from "../store/appContext.js";

import { Link } from "react-router-dom";

export const ServiceCard = () => {
	const { store, actions } = useContext(Context);

	useEffect(
		() => {
			actions.getUserServices();
		},
		[store.show]
	);

	const cards = store.services.map((service, index) => (
		<div className="service-body d-flex justify-content-center" key={index}>
			<div>
				{/* Esto hay que cambiarlo */}
				<p>----------------------------------------------------------------------</p>
				<button href="#" className="btn btn-primary" onClick={() => actions.showComponent()}>
					Edit
				</button>
				<button
					onClick={() => {
						alert("Are you sure you want to delete this pet");
						actions.deleteService(service.id_service_type);
					}}>
					<i className="fas fa-trash" />
				</button>
				<p>
					<strong>Servicio:</strong>
					{service.id_service_type}
				</p>
				<p>
					<strong>Descripcion:</strong>
				</p>
				<p> {service.description}</p>
				<p>
					<strong>Precio:</strong> {service.price_h}
					€/h
				</p>
			</div>
		</div>
	));
	return cards;
};
