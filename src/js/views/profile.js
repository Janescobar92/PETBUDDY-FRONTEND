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
		actions.getLogedUserPets();
	}, []);

	let id_user = useParams();
	const userToFind = store.users.find(user => user.id == id_user.id_user);

	if (store.users.length == 0) {
		return "Cargando perfil..";
	} else {
		return (
			<div>
				<Jumbotron
					view="profile"
					title={userToFind.name}
					subtitle={userToFind.last_name}
					img={userToFind.image}
				/>
				<div className="body--content-margins">
					<DescriptionContainer />
					<PetsCardContainer />
					{/* <CommentsContainer /> */}
					{/* <ShopCardContainer /> */}
				</div>
			</div>
		);
	}
};
