import React, { useContext } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Context } from "../store/appContext.js";

import { HorizontalCard } from "../component/h_card.js";

/* import { PetsCardContainer } from "../component/pets-cards-container.jsx"; */

export const Services = () => {
	const { store, actions } = useContext(Context);
	const cards = store.services.map((item, index) => (
		<HorizontalCard
			key={index}
			service={item.service}
			source={item.image}
			date={item.date}
			price={item.price}
			name={item.name}
		/>
	));
	return (
		<div>
			<h1>Nearby Services</h1>
			{cards}
		</div>
	);
};

/* import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { HorizontalCard } from "./hcard.jsx";
import PropTypes from "prop-types";
import { Context } from "../store/appContext.js";

export const CardContainer = () => {
	const { store, actions } = useContext(Context);
	let items = store.user_join_service_join_user_services;
	const cards = items.map((item, index) => (
		<HorizontalCard
			key={index}
			service={item.service}
			source={item.image}
			date={item.date}
			price={item.price}
			name={item.name}
		/>
	));
	return cards;
}; */
