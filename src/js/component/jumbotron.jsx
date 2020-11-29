import React, { useContext } from "react";
import { ProfilePicture } from "../component/profilepicture.jsx";
import "../../styles/jumbotron.scss";
import PropTypes from "prop-types";
import jumbotronImg from "../../assets/img/pixeltrue-yoga.png";
import { Context } from "../store/appContext.js";

export const Jumbotron = props => {
	const { store, actions } = useContext(Context);
	if (props.view == "profile") {
		return (
			<div>
				<div className="jumbotron-background-wave ">
					<div className="jumbotron-text-align">
						<h1>{props.title}</h1>
						<h2>{props.subtitle}</h2>
					</div>
					<div className="jumbotron-img-align">
						<ProfilePicture imgSrc={props.img} />
					</div>
				</div>
			</div>
		);
	} else if (props.view == "home") {
		return (
			<div className="jumbotron-background-wave ">
				<h1>
					Bienvenido
					{props.title}
				</h1>
			</div>
		);
	} else if (props.view == "nearby") {
		return (
			<div className="jumbotron-background-wave ">
				<h1>{props.title} cercanos</h1>;
			</div>
		);
	} else if (props.view == "history") {
		return (
			<div className="jumbotron-background-wave">
				<h1 className="text-center jumbotron-title-size">Historial</h1>
			</div>
		);
	} else if (props.view == "landing") {
		return (
			<div className="jumbotron-background-wave">
				<div className="jumbotron-tiltle--buttons-container">
					<h1 className="jumbotronlanding-title-size">Welcome to PetBUDDY</h1>
					<div className="jumbotron-buttons-container container">
						<button className="button-login-style" onClick={() => actions.setShowLogin()}>
							Login
						</button>
						<button className="button-login-style mt-4" onClick={() => actions.showComponent()}>
							Registro
						</button>
					</div>
				</div>
				<div>
					<img src={jumbotronImg} className="Jumbotron-img-size" />
				</div>
			</div>
		);
	} else {
		return "failed";
	}
};
Jumbotron.propTypes = {
	title: PropTypes.string,
	subtitle: PropTypes.string,
	img: PropTypes.string,
	view: PropTypes.string,
	clickShow: PropTypes.func
};