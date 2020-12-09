import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { Search } from "../component/search.js";
import { Button_Services } from "../component/button_services.js";
import { Jumbotron } from "../component/jumbotron.jsx";
import "../../styles/home.scss";

export const Home = () => {
	const { store, actions } = useContext(Context);
	let id_user = useParams();
	return (
		<div className="home text-center">
			<div>
				{/* Poner jumbotrom */}
				<Jumbotron view="profile" />
				<Search />
				<Button_Services service="Paseador" />
				<Button_Services service="Cuidador" />
				<Button_Services service="Hotel" />
				<Button_Services service="Adiestrador" />
				<Button_Services service="Veterinario" />
			</div>
		</div>
	);
};
