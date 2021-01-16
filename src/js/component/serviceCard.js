import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext.js";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { PayPalButton } from "./paypal.jsx";

export const ServiceCard = () => {
	const { store, actions } = useContext(Context);
	let Cards = null;
	let id_user = useParams();

	const ServiceTypes = param => {
		if (param == "Paseador") {
			return 1;
		} else if (param == "Cuidador") {
			return 2;
		} else if (param == "Hotel") {
			return 3;
		} else if (param == "Adiestrador") {
			return 4;
		} else if (param == "Veterinario") {
			return 5;
		}
	};

	useEffect(
		() => {
			actions.getUserServices();
		},
		[store.show]
	);
	if (id_user.id_user == store.logedUser) {
		Cards = store.services.map((service, index) => {
			return (
				<div className="service-body d-flex justify-content-center" key={index}>
					<div>
						<p>
							<strong>Servicio:</strong>
							{service.id_service_type}
						</p>
						<p>
							<strong>Descripción:</strong>
						</p>
						<p> {service.description}</p>
						<p>
							<strong>Precio:</strong> {service.price_h}
							€/h
						</p>
						<div className="on--edition-buttons-services--card-container">
							<button
								href="#"
								className="service--card-button"
								onClick={() => {
									actions.setPickedIndex(service.id);
									actions.showUpdateService();
								}}>
								Editar <i className="fas fa-edit" />
							</button>
							<button
								className="service--card-button"
								onClick={() => {
									alert("Are you sure you want to delete this pet");
									actions.deleteService(service.id_service_type);
								}}>
								Borrar <i className="fas fa-trash" />
							</button>
						</div>
					</div>
				</div>
			);
		});
	} else {
		Cards = store.otherUserServices.map((service, index) => {
			let value = service.price_h;
			return (
				<div className="service-body d-flex justify-content-center" key={index}>
					<div>
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
						<p>contratar servicio</p>
						<PayPalButton
							price={value.toString()}
							description={service.description}
							service_id_hired={ServiceTypes(service.id_service_type)}
						/>
					</div>
				</div>
			);
		});
	}
	return <div className="service--cards-profile">{Cards}</div>;
};
