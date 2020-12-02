import React from "react";
import "../../styles/containers_margins.scss";
import { DescriptionCard } from "./description_card.jsx";

export const DescriptionContainer = () => {
	//  aqui va un map

	return (
		<div className="body-container-margins">
			<h2>Sobre mí</h2>
			<div className="d-flex justify-content-center mt-3">
				<DescriptionCard />
			</div>
		</div>
	);
};
