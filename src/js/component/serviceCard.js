import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext.js";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

export const ServiceCard = () => {
	const { store, actions } = useContext(Context);
	let Cards = null;
	let id_user = useParams();

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
						{/* Esto hay que cambiarlo */}
						<p>----------------------------------------------------------------------</p>
						<button
							href="#"
							className="btn btn-primary"
							onClick={() => {
								actions.setPickedIndex(service.id);
								actions.showUpdateService();
							}}>
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
							<strong>Descripción:</strong>
						</p>
						<p> {service.description}</p>
						<p>
							<strong>Precio:</strong> {service.price_h}
							€/h
						</p>
					</div>
				</div>
			);
		});
	} else {
		Cards = store.otherUserServices.map((service, index) => {
			return (
				<div className="service-body d-flex justify-content-center" key={index}>
					<div>
						{/* Esto hay que cambiarlo */}
						<p>----------------------------------------------------------------------</p>
						{/* <button
						href="#"
						className="btn btn-primary"
						onClick={() => {
							actions.setPickedIndex(service.id);
							actions.showUpdateService();
						}}>
						Edit
					</button>
					<button
						onClick={() => {
							alert("Are you sure you want to delete this pet");
							actions.deleteService(service.id_service_type);
						}}>
						<i className="fas fa-trash" />
					</button> */}
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
						<button>contratar servicio</button>
					</div>
				</div>
			);
		});
	}
	return <div>{Cards}</div>;
};
