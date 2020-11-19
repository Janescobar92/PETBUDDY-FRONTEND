import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { HorizontalCard } from "./hcard.jsx";
import PropTypes from "prop-types";
import { Context } from "../store/appContext.js";

export const CardContainer = () => {
	const { store, actions } = useContext(Context);
	let myJoins = store.user_join_service_join_user_services;
	const cards = myJoins.map((myJoin, index) => (
		<HorizontalCard
			key={index}
			service={myJoin.service}
			source={myJoin.image}
			date={myJoin.date}
			price={myJoin.price}
			name={myJoin.name}
		/>
	));
	return cards;
};
