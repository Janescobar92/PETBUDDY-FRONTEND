import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { PetsCard } from "./vpetscard.jsx";
import { PetsForm } from "./pets_form.jsx";
import { Context } from "../store/appContext";

export const PetsCardContainer = () => {
	const { store, actions } = useContext(Context);
	//  aqui va un map
	// const [showResults, setShowResults] = useState(false);
	// const handleClick = () => setShowResults(!showResults);
	return (
		<div>
			<h2>Pets</h2>
			<button onClick={() => actions.handleClick()}>Add pet</button>
			{store.result ? <PetsForm /> : null}
			<PetsCard />
		</div>
	);
};
