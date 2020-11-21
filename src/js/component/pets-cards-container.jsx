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
			<div>
				<h2>Pets</h2>
				<button onClick={() => actions.showComponent()}>Add pet</button>
			</div>
			<div className="d-flex flex-column justify-content-center">
				{store.show ? <PetsForm /> : null}
				<PetsCard />
			</div>
		</div>
	);
};
