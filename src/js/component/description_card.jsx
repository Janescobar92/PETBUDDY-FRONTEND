import React, { useContext } from "react";
import "../../styles/description_card.scss";
import { Context } from "../store/appContext.js";
import { useParams } from "react-router-dom";

export const DescriptionCard = () => {
	const { store, actions } = useContext(Context);
	let id_user = useParams();
	let userIndex = null;
	for (let index = 0; index < store.users.length; index++) {
		if (id_user.id_user == store.users[index].id) {
			userIndex = index;
		}
	}
	return (
		<div className="description--card-size">
			<p>{store.users[userIndex].biografy}</p>
		</div>
	);
};
