import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext.js";
import { Link } from "react-router-dom";
import { UpdatePetsForm } from "./pets_update_form.jsx";
import { useParams } from "react-router-dom";
import paw from "../../assets/img/paw.png";
import "../../styles/pet_card.scss";

export const PetsCard = () => {
	const { store, actions } = useContext(Context);

	let Cards = null;

	let id_user = useParams();

	if (id_user.id_user == store.logedUser) {
		Cards = store.animals.map((animal, index) => {
			return (
				<div className="pet--card-style" key={index}>
					<div className="pet--card-header">
						<h3>{animal.name}</h3>
						<img className="" src={animal.image || paw} alt="Pet IMG" />
						<div className="pet--card-buttons--container">
							<button
								onClick={() => {
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
				</div>
			);
		});
	} else {
		Cards = store.othersPets.map((pet, index) => {
			return (
				<div className="pet--card-style" key={index}>
					<div className="pet--card-header">
						<h3>{pet.name}</h3>
						<img className="" src={pet.image || paw} alt="Pet IMG" />
						<div className="pet--card-buttons--container" />
					</div>
					<div className="pet--card-body">
						<h5 className="">Info</h5>
						<p className="">
							Mi {pet.animal_type} se llama {pet.name}. Tiene {pet.age} años.
						</p>
						<p className="">
							Es {pet.personality}, pesa {pet.weight}
							kg, tiene un tamaño de {pet.size}
							cm y es {pet.gender ? "hembra" : "macho"}.
						</p>
						<p className="">Afecciones: {pet.diseases}</p>
						<p className="">Esterilizado: {pet.sterilized ? "Si" : "No"}</p>
					</div>
				</div>
			);
		});
	}

	return (
		<div className="d-flex justify-content-around">
			{Cards}
			{store.showLogin ? <UpdatePetsForm /> : null}
		</div>
	);
};
