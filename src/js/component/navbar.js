import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { DeleteModal } from "./deleting_modal.jsx";
import "../../styles/navbar.scss";

export const Navbar = () => {
	const { store, actions } = useContext(Context);
	let param = useParams();

	if (localStorage.getItem("x-access-token") != null) {
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
							<p>Historial</p>
						</Link>
						<Link to="/">
							<p>
								<span onClick={() => actions.logOut()}>Cerrar sesión</span>
							</p>
						</Link>
						<button
							className="navabar--delte--button-style"
							onClick={() => {
								actions.setShowDeleteModal();
								console.log(store.showDeleteModal);
							}}>
							Borrar cuenta <i className="fas fa-user-slash" />
						</button>
					</div>
					{store.showDeleteModal ? <DeleteModal /> : null}
				</div>
			</nav>
		);
	} else {
		return (
			<nav className="navbar">
				<Link to={"/home/" + store.logedUser}>
					<span className="navbar-brand mb-0 h1">
						<i className="fas fa-paw" /> PetBuddy
					</span>
				</Link>
			</nav>
		);
	}
};
