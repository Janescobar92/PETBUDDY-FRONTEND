import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { HorizontalCard } from "./hcard.jsx";
import PropTypes from "prop-types";
import { Context } from "../store/appContext.js";

export const CardContainerYouWorkedFor = () => {
	const { store, actions } = useContext(Context);
	let myResults = store.yove_worked_history;
	const cards = myResults.map((myResult, index) => (
		<HorizontalCard
			key={index}
			service_type={myResult.service_type}
			source={myResult.image}
			date={myResult.date}
			total_price={myResult.total_price}
			name={myResult.name}
		/>
	));
	return cards;
};

export const CardContainerhired = () => {
	const { store, actions } = useContext(Context);
	let myResults = store.hired_history;
	const cards = myResults.map((myResult, index) => (
		<HorizontalCard
			key={index}
			service_type={myResult.service}
			source={myResult.image}
			date={myResult.date}
			total_price={myResult.total_price}
			name={myResult.name}
		/>
	));
	return cards;
};
