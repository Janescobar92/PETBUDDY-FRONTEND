import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { PetsCard } from "./vpetscard.jsx";
import { PetsForm } from "./pets_form.jsx";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";

import "../../styles/containers_margins.scss";
import "../../styles/profile_containers.scss";

export const PetsCardContainer = () => {
	const { store, actions } = useContext(Context);
	let id_user = useParams();

	if (id_user.id_user == store.logedUser) {
		return (
			<>
				<div className="body-container-margins mt-5">
					<div className="container-title-size">
						<h2>Pets</h2>
						<button onClick={() => actions.showComponent()}>
							<i className="fas fa-plus-circle" />
						</button>
					</div>
				</div>
				<div className="mt-5">
					{store.show ? <PetsForm /> : null}
					<PetsCard />
				</div>
			</>
		);
	} else {
		return (
			<>
				<div className="body-container-margins">
					<div className="container-title-size">
						<h2>Pets</h2>
					</div>
				</div>
				<div>
					<PetsCard />
				</div>
			</>
		);
	}
};
