import React from "react";
import { Context } from "../store/appContext.js";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "../../styles/h_card_style.scss";

export const HorizontalCard = props => {
	return (
		<div className="card-container">
			<div className="img-container">
				<img src={props.source} className="" alt="Profile picture" />
			</div>
			<div className="text-container">
				<h5 className="card-title text-dark">{props.name}</h5>
				<p className="card-text text-dark">Servicion ofrecido: {props.service}</p>
				<p className="card-text">
					<small className="text-dark">Coste del servicio: {props.price} €</small>
				</p>
				<p className="card-text">
					<small className="text-dark">Distancia: {props.distance}</small>
				</p>
				<p className="card-text">
					<small className="text-dark">Descripcion: {props.description}</small>
				</p>
			</div>
		</div>
	);
};
HorizontalCard.propTypes = {
	source: PropTypes.string,
	name: PropTypes.string,
	service: PropTypes.string,
	price: PropTypes.string,
	distance: PropTypes.string,
	description: PropTypes.string
};
