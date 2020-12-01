import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

import "../../styles/navbar.scss";

export const Navbar = () => {
	const { store, actions } = useContext(Context);
	let param = useParams();
	return (
		<nav className="navbar">
			<Link to={"/home/" + store.logedUser}>
				<span className="navbar-brand mb-0 h1">
					<i className="fas fa-paw" /> PetBuddy
				</span>
			</Link>
			<div className="dropdown">
				<button
					className="btn btn-secondary dropdown-toggle"
					type="button"
					id="dropdownMenuButton"
					data-toggle="dropdown"
					aria-haspopup="true"
					aria-expanded="false">
					<i className="fas fa-bars" />
				</button>
				<div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
					<Link to={"/profile/" + store.logedUser}>
						<p>Perfil</p>
					</Link>
					<Link to={"/history/" + store.logedUser}>
						<p>Hitorial</p>
					</Link>
				</div>
			</div>
		</nav>
	);
};
