import React, { useContext } from "react";
import { Context } from "../store/appContext.js";
import { Link } from "react-router-dom";
import { ServiceCard } from "./serviceCard.js";
import { ServiceForm } from "./serviceForm.js";

export const ServiceCardContainer = () => {
	const { store, actions } = useContext(Context);
	//  aqui va un map

	return (
		<div className="body-container-margins">
			<h2 className="flex justify-content-space-between">
				Services, info and prices
				<button onClick={() => actions.showComponentService()}>
					<i className="fas fa-plus-circle" />
				</button>
			</h2>

			<div className="d-flex flex-column justify-content-center">
				{store.showService ? <ServiceForm /> : null}
				<ServiceCard />
			</div>
		</div>
	);
};