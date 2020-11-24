import React, { useContext } from "react";

import { Context } from "../store/appContext.js";

import { Link } from "react-router-dom";

export const PetsCard = () => {
	const { store, actions } = useContext(Context);
	const cards = store.animals.map((animal, index) => (
		<div className="card" style={{ width: "18rem" }} key={index}>
			<div className="card-header">
				{animal.name}
				<img className="card-img-top" src={animal.image} alt="pet" />
				<a href="#" className="btn btn-primary">
					Edit
				</a>
			</div>
			<div className="card-body">
				<h5 className="card-title">Info</h5>
				<p className="card-text">
					Mi {animal.animal_type} se llama {animal.name} Tiene {animal.age} años.
				</p>
				<p className="card-text">
					Es un {animal.animal_type} {animal.personality} pesa {animal.weight}
					kg y tiene un tamaño de {animal.size}
					cm es {animal.gender ? "hembra" : "macho"}.
				</p>
				<p className="card-text">Affecciones: {animal.diseases}</p>
				<p className="card-text">Esterilizado: {animal.sterilized ? "Si" : "No"}</p>
			</div>
		</div>
	));
	return cards;
};
