import React, { useContext, useState } from "react";
import { Context } from "../store/appContext.js";
import { Link } from "react-router-dom";
import { ServiceCard } from "./serviceCard.js";
import { ServiceForm } from "./serviceForm.js";
import { ServiceFormUpdate } from "./service_update_form.js";
import { useParams } from "react-router-dom";

export const ServiceCardContainer = () => {
	const { store, actions } = useContext(Context);
	const [backgroundBlur, setBackgroundBlur] = useState(false);
	let id_user = useParams();

	if (id_user.id_user == store.logedUser) {
		return (
			<div className="d-flex justify-content-center">
				<div className="description-container-style">
					<div className="d-flex justify-content-between">
						<h2 className="category-title-style">Servicios</h2>
						<button className="cards-options--buttons-style" onClick={() => actions.showComponentService()}>
							<i className="fas fa-plus-circle" />
						</button>
					</div>

					<div className="d-flex flex-column justify-content-center">
						{store.showService ? <ServiceForm /> : null}
						{store.showUpdate ? <ServiceFormUpdate /> : null}
						<ServiceCard />
					</div>
				</div>
			</div>
		);
	} else {
		return (
			<div className="d-flex justify-content-center">
				<div className="description-container-style">
					<div className="d-flex justify-content-between">
						<h2 className="category-title-style">Servicios</h2>
					</div>

					<div className="d-flex flex-column justify-content-center">
						<ServiceCard />
					</div>
				</div>
			</div>
		);
	}
};
