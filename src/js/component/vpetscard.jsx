import React, { useContext, useEffect } from "react";

import { Context } from "../store/appContext.js";

import { Link } from "react-router-dom";

import { UpdatePetsForm } from "./pets_update_form.jsx";

import "../../styles/pet_card.scss";

export const PetsCard = () => {
	const { store, actions } = useContext(Context);

	const Cards = store.animals.map((animal, index) => {
		return (
			<div className="pet--card-style" key={index}>
				<div className="pet--card-header">
					<h3>{animal.name}</h3>
					<img className="" src={animal.image} alt="Pet IMG" />
					<div className="pet--card-buttons--container">
						<button
							onClick={() => {
								// alert("Seguro que quieres editar");
								actions.setPickedIndex(animal.id);
								actions.setShowLogin();
							}}>
							<i className="fas fa-edit" />
						</button>
						<button
							onClick={() => {
								alert("Are you sure you want to delete this pet");
								actions.deletUserPet(animal.id);
							}}>
							<i className="fas fa-trash" />
						</button>
					</div>
				</div>
				<div className="pet--card-body">
					<h5 className="">Info</h5>
					<p className="">
						Mi {animal.animal_type} se llama {animal.name}. Tiene {animal.age} años.
					</p>
					<p className="">
						Es {animal.personality}, pesa {animal.weight}
						kg, tiene un tamaño de {animal.size}
						cm y es {animal.gender ? "hembra" : "macho"}.
					</p>
					<p className="">Afecciones: {animal.diseases}</p>
					<p className="">Esterilizado: {animal.sterilized ? "Si" : "No"}</p>
				</div>
			</div>
		);
	});
	return (
		<div className="d-flex flex-column justify-content-center">
			{Cards}
			{store.showLogin ? <UpdatePetsForm /> : null}
		</div>
	);
};
