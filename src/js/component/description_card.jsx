import React, { useContext } from "react";
import "../../styles/description_card.scss";
import { Context } from "../store/appContext.js";
import { useParams } from "react-router-dom";

export const DescriptionCard = () => {
	const { store, actions } = useContext(Context);
	let iduser = useParams();
	let userIndex = null;
	for (let index = 0; index < store.users.length; index++) {
		if (iduser.iduser == store.users[index].id) {
			userIndex = index;
		}
	}
	return (
		<div className="Description--card-size">
			<p>{store.users[userIndex].biografy}</p>
		</div>
	);
};
