import React from "react";
import { Link } from "react-router-dom";
import "../../styles/navbar.scss";

export const Navbar = () => {
	return (
		<nav className="navbar">
			<Link to="/">
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
					<Link to="/profile">
						<p>Perfil</p>
					</Link>
					<Link to="/history">
						<p>Hitorial</p>
					</Link>
				</div>
			</div>
		</nav>
	);
};
