import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { Search } from "../component/search.js";
import { Button_Services } from "../component/button_services.js";

export const Home = () => (
	<div className="home text-center">
		<div>
			<Search />
			<Button_Services service="Paseador" />
			<Button_Services service="Cuidador" />
			<Button_Services service="Hotel" />
			<Button_Services service="Adiestrador" />
			<Button_Services service="Veterinario" />
		</div>
	</div>
);
