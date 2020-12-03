import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";
import { DescriptionContainer } from "../component/description-container.jsx";

import { Jumbotron } from "../component/jumbotron.jsx";
import { ServiceCardContainer } from "../component/service_card_container";

export const Profile = () => {
	const { store, actions } = useContext(Context);
	let iduser = useParams();
	// let myJoins = store.user;
	let userIndex = null;
	for (let index = 0; index < store.users.length; index++) {
		if (iduser.iduser == store.users[index].id) {
			userIndex = index;
		}
	}

	if (store.users.length == 0) {
		return "Cargando perfil..";
	} else {
		return (
			<div>
				<Jumbotron
					title={store.users[userIndex].name}
					subtitle={store.users[userIndex].last_name}
					img={store.users[userIndex].image}
				/>
				<div className="body--content-margins">
					<DescriptionContainer />
					<ServiceCardContainer />
				</div>
			</div>
		);
	}
};
