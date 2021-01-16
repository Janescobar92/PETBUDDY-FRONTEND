import React from "react";
import "../../styles/containers_margins.scss";
import "../../styles/description_card.scss";
import { DescriptionCard } from "./description_card.jsx";

export const DescriptionContainer = () => {
	return (
		<div className="d-flex justify-content-center">
			<div className="description-container-style">
				<h2 className="category-title-style">Sobre mí</h2>
				<div className="d-flex justify-content-center mt-3">
					<DescriptionCard />
				</div>
			</div>
		</div>
	);
};
