import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { HorizontalCard } from "./hcard.jsx";
import PropTypes from "prop-types";
import { Context } from "../store/appContext.js";
import avatar from "../../assets/img/havatar.png";

export const CardContainerYouWorkedFor = () => {
	const { store, actions } = useContext(Context);
	let myCards = store.yove_worked_history;
	if (myCards.length != 0) {
		const Cards = myCards.map((myCard, index) => (
			<Link style={{ textDecoration: "none" }} key={index} to={"/outprofile/" + myCard.user_id_who_hire}>
				<HorizontalCard
					service_type={myCard.service_name}
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
			<div className="d-flex justify-content-center">
				<p>Aún no has trabajado para nadie</p>
			</div>
		);
	}
};

export const CardContainerhired = () => {
	const { store, actions } = useContext(Context);
	let myResults = store.hired_history;
	console.log(myResults);

	if (myResults.length != 0) {
		const Cards = myResults.map((myResult, index) => (
			<Link style={{ textDecoration: "none" }} key={index} to={"/outprofile/" + myResult.user_who_ofered_id}>
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
			<div className="d-flex justify-content-center">
				<p>Aún no has contratado nadie</p>
			</div>
		);
	}
};
