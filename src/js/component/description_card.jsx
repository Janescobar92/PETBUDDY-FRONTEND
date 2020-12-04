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
			<p>{userToFind.biografy}</p>
		</div>
	);
};
