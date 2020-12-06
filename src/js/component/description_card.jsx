import React, { useContext } from "react";
import "../../styles/description_card.scss";
import { Context } from "../store/appContext.js";
import { useParams } from "react-router-dom";

export const DescriptionCard = () => {
	const { store, actions } = useContext(Context);
	let id_user = useParams();
	const userToFind = store.users.find(user => user.id == id_user.id_user);

	return (
		<div className="description--card-size">
			<div>
				<p>{userToFind.biografy}</p>
			</div>
			<div className="description--card--footer-style">
				<p> Telf: {userToFind.phone} </p>
				{""}
				<p> Dirección: {userToFind.location} </p>
				{""}
				<p> Email: {userToFind.email} </p>
				{""}
			</div>
		</div>
	);
};
