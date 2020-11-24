import React, { useContext } from "react";
import { Context } from "../store/appContext.js";
import { Link } from "react-router-dom";
import { ServiceCard } from "./serviceCard.js";
import { ServiceForm } from "./serviceForm.js";

export const ServiceCardContainer = () => {
	const { store, actions } = useContext(Context);
	//  aqui va un map

	return (
		<div>
			<div className="row justify-content-center">
				<h2> Services, info and prices</h2>
				<button onClick={() => actions.showComponent()}>
					<strong>+</strong>
				</button>
			</div>
			<div className="d-flex flex-column justify-content-center">
				{store.show ? <ServiceForm /> : null}
				<ServiceCard />
			</div>
		</div>
	);
};
