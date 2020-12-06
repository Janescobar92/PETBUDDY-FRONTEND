import React, { useContext, useState } from "react";
import "../../styles/description_card.scss";
import { Context } from "../store/appContext.js";
import { useParams } from "react-router-dom";

export const DescriptionCard = () => {
	const [dislpayForm, setdislpayForm] = useState(false);
	const { store, actions } = useContext(Context);
	let id_user = useParams();
	const userToFind = store.users.find(user => user.id == id_user.id_user);

	let FilledCard = (
		<div className="description--card-size">
			<button onClick={() => setdislpayForm(true)}>
				Editar perfil <i className="fas fa-edit" />
			</button>
			<div className="description--card--body-style">
				<p>{userToFind.biografy}</p>
			</div>
			<div className="description--card--footer-style">
				<p> Telf: {userToFind.phone} </p>
				<p> Dirección: {userToFind.location} </p>
				<p> Email: {userToFind.email} </p>
			</div>
		</div>
	);

	let FilledForm = (
		<div className="description--card-size">
			<button
				onClick={() => {
					setdislpayForm(false);
					actions.updateUser();
					window.location.reload();
				}}>
				Guardar cambios <i className="fas fa-check-circle" />
			</button>
			<label htmlFor="name">Nombre</label>
			<input type="text" className="input" name="name" id="name" required defaultValue={userToFind.name} />
			<label htmlFor="last_name">Apellidos</label>
			<input
				type="text"
				className="input"
				name="last_name"
				id="last_name"
				required
				defaultValue={userToFind.last_name}
			/>
			<label htmlFor="email">Email</label>
			<input type="email" className="input" name="email" id="email" required defaultValue={userToFind.email} />
			<label htmlFor="phone">Teléfono</label>
			<input type="text" className="input" name="phone" id="phone" required defaultValue={userToFind.phone} />
			<label htmlFor="location">Dirección</label>
			<input
				type="text"
				className="input"
				name="location"
				id="location"
				required
				defaultValue={userToFind.location}
			/>
			<label htmlFor="biografy">Sobre mi</label>
			<textarea
				type="text"
				className="input"
				name="biografy"
				id="biografy"
				required
				defaultValue={userToFind.biografy}
			/>
			<label htmlFor="img">IMG</label>
			<input type="file" className="input-file" name="img" id="img" required defaultValue={userToFind.image} />
		</div>
	);

	if (dislpayForm == false) {
		return FilledCard;
	} else {
		return FilledForm;
	}
};
