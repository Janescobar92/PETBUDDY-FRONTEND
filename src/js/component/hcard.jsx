import React, { useContext } from "react";

import { Context } from "../store/appContext.js";

import { Link } from "react-router-dom";

import PropTypes from "prop-types";

export const HorizontalCard = props => {
	return (
		<div className="card mb-3" style={{ width: "540px" }}>
			<div className="row no-gutters">
				<div className="col-md-4">
					<img src={props.source} className="card-img" alt="Profile picture" />
				</div>
				<div className="col-md-8">
					<div className="card-body">
						<h5 className="card-title">{props.name}</h5>
						<p className="card-text">Servicion ofrecido: {props.service}</p>
						<p className="card-text">
							<small className="text-muted">{props.date}</small>
						</p>
						<p className="card-text">
							<small className="text-muted">Precio: {props.price} €</small>
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};
HorizontalCard.propTypes = {
	source: PropTypes.string,
	name: PropTypes.string,
	date: PropTypes.string,
	service: PropTypes.string,
	price: PropTypes.number
};
