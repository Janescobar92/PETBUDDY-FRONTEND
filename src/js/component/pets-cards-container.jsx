import React from "react";
import { Link } from "react-router-dom";
import { PetsCard } from "./vpetscard.jsx";
import "../../styles/containers_margins.scss";

export const PetsCardContainer = () => {
	return (
		<div className="body-container-margins">
			<h2>Pets</h2>
			<div className="d-flex justify-content-center mt-3">
				<PetsCard />
			</div>
		</div>
	);
};
