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
				<div className="body-container-margins">
					<div className="description-container-style">
						<div className="d-flex justify-content-between">
							<h2 className="category-title-style">Mascotas</h2>
							<button className="cards-options--buttons-style" onClick={() => actions.showComponent()}>
								<i className="fas fa-plus-circle" />
							</button>
						</div>
						<div>
							{store.show ? <PetsForm /> : null}
							<PetsCard />
						</div>
					</div>
				</div>
			</>
		);
	} else {
		return (
			<>
				<div className="body-container-margins">
					<div className="description-container-style">
						<div className="d-flex justify-content-between">
							<h2 className="category-title-style">Mascotas</h2>
						</div>
						<div>
							<PetsCard />
						</div>
					</div>
				</div>
			</>
		);
	}
};
