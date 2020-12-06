import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";
import { Jumbotron } from "../component/jumbotron.jsx";
import { CardContainer } from "../component/cards-container.jsx";
import "../../styles/h_card_style.scss";

export const History = () => {
	const { store, actions } = useContext(Context);

	useEffect(() => {
		actions.getWhoHireYouHistory();
	}, []);

	return (
		<div>
			<Jumbotron view="history" />
			<h2>Has trabajado para</h2>
			<div className="container-cardbox-align">
				<CardContainer />;
			</div>
		</div>
	);
};
