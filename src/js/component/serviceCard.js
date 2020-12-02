import React, { useContext, useEffect } from "react";

import { Context } from "../store/appContext.js";

import { Link } from "react-router-dom";

export const ServiceCard = () => {
	const { store, actions } = useContext(Context);

	const type_service = service_type => {
		if (service_type == 1) service_type = "Paseador";
		if (service_type == 2) service_type = "Cuidador";
		if (service_type == 3) service_type = "Hotel";
		return service_type;
	};

	useEffect(
		() => {
			actions.getUserServices();
		},
		[store.show]
	);

	const cards = store.services.map((service, index) => (
		<div className="service-body d-flex justify-content-center" key={index}>
			<div>
				<p>----------------------------------------------------------------------</p>
				<p>
					<strong>Servicio:</strong>
					{type_service(service.id_service_type)}
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
