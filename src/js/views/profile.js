import React, { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";
import { DescriptionContainer } from "../component/description-container.jsx";
import { Jumbotron } from "../component/jumbotron.jsx";
import { ServiceCardContainer } from "../component/service_card_container";
import { PetsCardContainer } from "../component/pets-cards-container.jsx";
import avatar from "../../assets/img/avatar.png";
import "../../styles/profile_containers.scss";

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
					img={userToFind.image || avatar}
				/>
				<ul className="nav nav-pills mb-3 justify-content-center mt-3" id="pills-tab" role="tablist">
					<li className="nav-item" role="presentation">
						<a
							className="nav-link active"
							id="pills-home-tab"
							data-toggle="pill"
							href="#pills-home"
							role="tab"
							aria-controls="pills-home"
							aria-selected="true">
							Sobre mí
						</a>
					</li>
					<li className="nav-item" role="presentation">
						<a
							className="nav-link"
							id="pills-profile-tab"
							data-toggle="pill"
							href="#pills-profile"
							role="tab"
							aria-controls="pills-profile"
							aria-selected="false">
							Servicios
						</a>
					</li>
					<li className="nav-item" role="presentation">
						<a
							className="nav-link"
							id="pills-contact-tab"
							data-toggle="pill"
							href="#pills-contact"
							role="tab"
							aria-controls="pills-contact"
							aria-selected="false">
							Mascotas
						</a>
					</li>
				</ul>
				<div className="tab-content" id="pills-tabContent">
					<div
						className="tab-pane fade show active"
						id="pills-home"
						role="tabpanel"
						aria-labelledby="pills-home-tab">
						<DescriptionContainer />
					</div>
					<div
						className="tab-pane fade"
						id="pills-profile"
						role="tabpanel"
						aria-labelledby="pills-profile-tab">
						<ServiceCardContainer />
					</div>
					<div
						className="tab-pane fade"
						id="pills-contact"
						role="tabpanel"
						aria-labelledby="pills-contact-tab">
						<PetsCardContainer />
					</div>
				</div>
			</div>
		);
	}
};
