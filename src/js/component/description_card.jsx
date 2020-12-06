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
				<i className="fas fa-edit" />
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
			<button onClick={() => setdislpayForm(false)}>
				<i className="fas fa-check-circle" />
			</button>
			Soy un formulario
		</div>
	);

	if (dislpayForm == false) {
		return FilledCard;
	} else {
		return FilledForm;
	}
};
