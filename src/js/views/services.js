import React, { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Context } from "../store/appContext.js";

import { HorizontalCard } from "../component/h_card.js";

/* import { PetsCardContainer } from "../component/pets-cards-container.jsx"; */

export const Services = () => {
	const { store, actions } = useContext(Context);
	/* useEffect(
		() => {
			console.log(service, "en use efeect");
			actions.getTypeServices(service);
		},
		[store.render]
	); */
	/* actions.getTypeServices(); */
	const cards = store.services.map((item, index) => (
		<HorizontalCard
			key={index}
			source={
				"https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
			}
			name={item.id_user_offer}
			service={item.id_service_type}
			price={item.price_h}
			description={item.description}
		/>
	));
	return (
		<div>
			<h1>Nearby Services</h1>
			{cards}
		</div>
	);
};
