import React, { useState, useEffect, useContext, Fragment } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";
import { DescriptionContainer } from "../component/description-container.jsx";
import { ServiceCardContainer } from "../component/service_card_container";
import { PetsCardContainer } from "../component/pets-cards-container.jsx";
import { Jumbotron } from "../component/jumbotron.jsx";
import avatar from "../../assets/img/avatar.png";

import "../../styles/jumbotron.scss";

export const OthersProfile = () => {
	const { store, actions } = useContext(Context);
	let id_user = useParams();

	useEffect(() => {
		actions.readOtherprofile(id_user.id_user);
	}, []);

	const userToFind = store.profiles.find(profile => profile.id == id_user.id_user);
	if (userToFind == undefined) {
		return "Cargando perfil..";
	} else {
		return (
			<div>
				<Jumbotron
					view="othersprofile"
					title={userToFind.name}
					subtitle={userToFind.last_name}
					img={userToFind.image || avatar}
				/>
				<div className="jumbotron-buttons-container mb-3">
					{/* <button className="button-login-style align-self-center">Contratar</button> */}
				</div>
				<div className="body--content-margins">
					<DescriptionContainer />
					<ServiceCardContainer />
					<PetsCardContainer />
				</div>
			</div>
		);
	}
};
