import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import { CardContainer } from "../component/cards-container.jsx";
import "../../styles/h_card_style.scss";

export const History = () => {
	return (
		<div>
			<h2>Has trabajado para</h2>
			<div className="container-cardbox-align">
				<CardContainer />;
			</div>
		</div>
	);
};
