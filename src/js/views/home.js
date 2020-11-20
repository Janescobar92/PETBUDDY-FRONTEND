import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { Search } from "../component/search.js";
import { Button_Services } from "../component/button_services.js";

export const Home = () => (
	<div className="home text-center">
		{/* <h1>Hello Rigo!</h1>
		<p>
			<img src={rigoImage} />
		</p>
		<a href="#" className="btn btn-success">
			If you see this green button, bootstrap is working
		</a> */}
		<div>
			<Search />
			<Button_Services service="Veterinario" />
			<Button_Services service="Cuidadores" />
			<Button_Services service="Adiestradores" />
			<Button_Services service="Tiendas" />
			<Button_Services service="Paseadores" />
			<Button_Services service="Peluquerias" />
			<Button_Services service="Hoteles" />
		</div>
	</div>
);
