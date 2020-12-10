import React, { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Context } from "../store/appContext.js";

import { HorizontalCard } from "../component/h_card.js";
export const Services = () => {
	const { store, actions } = useContext(Context);
	actions.MatrixDistance();
	console.log(store.distances, "en vista services");

	const cards = store.services.map((item, index) => {
		let distancia = actions.SearchDistance(item.id_user_offer);
		console.log(distancia, "en services distances");

		return (
			<HorizontalCard
				key={index}
				source={
					"https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
				}
				name={item.id_user_offer}
				service={item.id_service_type}
				price={item.price_h}
				distance={distancia}
				description={item.description}
			/>
		);
	});
	return (
		<div>
			<h1>Nearby Services</h1>
			{cards}
		</div>
	);
};
