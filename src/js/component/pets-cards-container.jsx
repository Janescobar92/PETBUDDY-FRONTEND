import React from "react";
import { Link } from "react-router-dom";
import { PetsCard } from "./vpetscard.jsx";

export const PetsCardContainer = () => {
	return (
		<div>
			<h2>Pets</h2>
			<PetsCard />
		</div>
	);
};
