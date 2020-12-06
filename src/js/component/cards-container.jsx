import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { HorizontalCard } from "./hcard.jsx";
import PropTypes from "prop-types";
import { Context } from "../store/appContext.js";

export const CardContainerYouWorkedFor = () => {
	const { store, actions } = useContext(Context);
	let myResults = store.yove_worked_history;
	const Cards = myResults.map((myResult, index) => (
		<Link style={{ textDecoration: "none" }} key={index} to={"/outprofile/" + myResult.id}>
			<HorizontalCard
				service_type={myResult.service_type}
				source={myResult.image}
				date={myResult.date}
				total_price={myResult.total_price}
				name={myResult.name}
			/>
		</Link>
	));
	return Cards;
};

export const CardContainerhired = () => {
	const { store, actions } = useContext(Context);
	let myResults = store.hired_history;
	const Cards = myResults.map((myResult, index) => (
		<Link style={{ textDecoration: "none" }} key={index} to={"/outprofile/" + myResult.id}>
			<HorizontalCard
				service_type={myResult.service}
				source={myResult.image}
				date={myResult.date}
				total_price={myResult.total_price}
				name={myResult.name}
			/>
		</Link>
	));
	return Cards;
};
