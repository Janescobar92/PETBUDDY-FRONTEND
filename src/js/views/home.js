import React, { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { Search } from "../component/search.js";
import { Button_Services } from "../component/button_services.js";
import { Jumbotron } from "../component/jumbotron.jsx";
import "../../styles/landing.scss";
import "../../styles/home.scss";

export const Home = () => {
	const { store, actions } = useContext(Context);
	let id_user = useParams();

	useEffect(() => {
		actions.getLogedUser();
		actions.getLogedUserPets();
	}, []);

	const userToFind = store.users.find(user => user.id == id_user.id_user);

	if (store.users.length == 0) {
		return "Cargando home..";
	} else {
		return (
			<div className="home text-center">
				<div>
					<Jumbotron view="home" title={userToFind.name} />
					<Search />
					<div>
						<div className="our--services-box--style">
							<h2>Haz click en un servicio</h2>
						</div>
						<div className="service-cards--container-flex">
							<Button_Services service="Paseador" classStyle="services--presentation-card--walker zoom" />
							<Button_Services
								service="Cuidador"
								classStyle="services--presentation-card--daycare zoom"
							/>
							<Button_Services service="Hotel" classStyle="services--presentation-card--hotel zoom" />
							<Button_Services
								service="Adiestrador"
								classStyle="services--presentation-card--teacher zoom"
							/>
							<Button_Services service="Veterinario" classStyle="services--presentation-card--vet zoom" />
						</div>
					</div>
				</div>
			</div>
		);
	}
};
