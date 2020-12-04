import React from "react";
import { Link } from "react-router-dom";
import { PetsCard } from "./vpetscard.jsx";
import "../../styles/containers_margins.scss";
import { DescriptionCard } from "./description_card.jsx";

export const DescriptionContainer = () => {
	return (
		<div className="body-container-margins">
			<h2>Sobre mí</h2>
			<div className="d-flex justify-content-center mt-3">
				<DescriptionCard />
			</div>
		</div>
	);
};
