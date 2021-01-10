import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { HorizontalCard } from "./hcard.jsx";
import PropTypes from "prop-types";
import { Context } from "../store/appContext.js";

export const CardContainerYouWorkedFor = () => {
	const { store, actions } = useContext(Context);
	let myCards = store.yove_worked_history;
	if (myCards.length != 0) {
		const Cards = myCards.map((myCard, index) => (
			<Link style={{ textDecoration: "none" }} key={index} to={"/outprofile/" + myCard.id}>
				<HorizontalCard
					service_type={myCard.service_type}
					source={myCard.image}
					date={myCard.date}
					total_price={myCard.total_price}
					name={myCard.name}
				/>
			</Link>
		));
		return Cards;
	} else {
		return (
			<div>
				<p>Aún no has trabajado para nadie</p>
			</div>
		);
	}
};

export const CardContainerhired = () => {
	const { store, actions } = useContext(Context);
	let myResults = store.hired_history;
	if (myResults.length != 0) {
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
	} else {
		return (
			<div>
				<p>Aún no has contratado nadie</p>
			</div>
		);
	}
};
