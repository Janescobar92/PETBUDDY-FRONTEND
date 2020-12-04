import React, { useContext } from "react";
import PropTypes from "prop-types";
import "../../styles/h_card_style.scss";

export const HorizontalCard = props => {
	return (
		<div className="card-container">
			<div className="img-container">
				<img src={props.source} className="" alt="Profile picture" />
			</div>
			<div className="text-container">
				<h5 className="card-title">{props.name}</h5>
				<p className="card-text">Servicio ofrecido: {props.service_type}</p>
				<p className="card-text">
					<small className="text-ligth">Fecha: {props.date}</small>
				</p>
				<p className="card-text">
					<small className="text-ligth">Coste del servicio: {props.price} €</small>
				</p>
			</div>
		</div>
	);
};
HorizontalCard.propTypes = {
	source: PropTypes.string,
	name: PropTypes.string,
	date: PropTypes.string,
	service_type: PropTypes.string,
	price: PropTypes.number
};
