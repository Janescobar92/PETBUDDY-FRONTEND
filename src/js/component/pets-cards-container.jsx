import React from "react";
import { Link } from "react-router-dom";
import { PetsCard } from "./vpetscard.jsx";
import "../../styles/containers_margins.scss";

export const PetsCardContainer = () => {
	//  aqui va un map

	return (
		<div className="body-container-margins">
			<h2>Pets</h2>
			<div className="d-flex justify-content-center mt-3">
				<PetsCard />
			</div>
		</div>
	);
};
