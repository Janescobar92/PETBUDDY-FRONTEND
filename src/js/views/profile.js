import React, { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";
import { DescriptionContainer } from "../component/description-container.jsx";
import { Jumbotron } from "../component/jumbotron.jsx";
import { ServiceCardContainer } from "../component/service_card_container";
import { PetsCardContainer } from "../component/pets-cards-container.jsx";

export const Profile = () => {
	const { store, actions } = useContext(Context);
	let id_user = useParams();

	useEffect(() => {
		actions.getLogedUser();
		actions.getLogedUserPets();
	}, []);

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
					{/* <CommentsContainer /> */}
					{/* <ShopCardContainer /> */}
					<ServiceCardContainer />
					<PetsCardContainer />
				</div>
			</div>
		);
	}
};
