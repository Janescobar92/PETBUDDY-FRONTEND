import React, { useContext } from "react";
import { Context } from "../store/appContext.js";
import { Link } from "react-router-dom";
import { ServiceCard } from "./serviceCard.js";
import { ServiceForm } from "./serviceForm.js";
import { ServiceFormUpdate } from "./service_update_form.js";
import { useParams } from "react-router-dom";

export const ServiceCardContainer = () => {
	const { store, actions } = useContext(Context);
	let id_user = useParams();

	if (id_user.id_user == store.logedUser) {
		return (
			<div className="body-container-margins mt-5">
				<h2 className="flex justify-content-space-between">
					Services, info and prices
					<button onClick={() => actions.showComponentService()}>
						<i className="fas fa-plus-circle" />
					</button>
				</h2>

				<div className="d-flex flex-column justify-content-center mt-5">
					{store.showService ? <ServiceForm /> : null}
					{store.showUpdate ? <ServiceFormUpdate /> : null}
					<ServiceCard />
				</div>
			</div>
		);
	} else {
		return (
			<div className="body-container-margins mt-5">
				<h2 className="flex justify-content-space-between">Servicios</h2>

				<div className="d-flex flex-column justify-content-center mt-5">
					<ServiceCard />
				</div>
			</div>
		);
	}
};
