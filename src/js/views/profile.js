import React, { useState, useEffect, useContext, Fragment } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";

import { ShopCardContainer } from "../component/shops-cards-container.jsx";
import { DescriptionContainer } from "../component/description-container.jsx";
import { CommentsContainer } from "../component/comments-container.jsx";
import { PetsCardContainer } from "../component/pets-cards-container.jsx";
import { Jumbotron } from "../component/jumbotron.jsx";

export const Profile = () => {
	const { store, actions } = useContext(Context);

	useEffect(() => {
		actions.getLogedUser();
	}, []);

	let id_user = useParams();

	let userIndex = null;
	for (let index = 0; index < store.users.length; index++) {
		if (id_user.id_user == store.users[index].id) {
			userIndex = index;
		}
	}
	console.log(userIndex);
	if (store.users.length == 0) {
		return "Cargando perfil..";
	} else {
		return (
			<div>
				<Jumbotron
					view="profile"
					title={store.users[userIndex].name}
					subtitle={store.users[userIndex].last_name}
					img={store.users[userIndex].image}
				/>
				<div clasName="body--content-margins">
					<DescriptionContainer />
					<PetsCardContainer />
					<CommentsContainer />
					<ShopCardContainer />
				</div>
			</div>
		);
	}
};
