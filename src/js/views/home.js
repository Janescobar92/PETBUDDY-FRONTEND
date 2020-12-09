import React, { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { Search } from "../component/search.js";
import { Button_Services } from "../component/button_services.js";
import { Jumbotron } from "../component/jumbotron.jsx";

import "../../styles/home.scss";

export const Home = () => {
	const { store, actions } = useContext(Context);

	useEffect(() => {
		actions.getLogedUser();
		actions.getLogedUserPets();
	}, []);

	let id_user = useParams();
	const userToFind = store.users.find(user => user.id == id_user.id_user);
	console.log(userToFind, "en home");

	if (store.users.length == 0) {
		return "Cargando home..";
	} else {
		return (
			<div className="home text-center">
				<div>
					{/* Poner jumbotrom */}
					<Jumbotron view="home" title={userToFind.name} />
					{/* <Jumbotron view="home" title={userToFind.name} /> */}
					<Search />
					<Button_Services service="Paseador" />
					<Button_Services service="Cuidador" />
					<Button_Services service="Hotel" />
					<Button_Services service="Adiestrador" />
					<Button_Services service="Veterinario" />
				</div>
			</div>
		);
	}
};
