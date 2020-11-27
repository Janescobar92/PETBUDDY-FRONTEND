import React, { useContext, useState } from "react";

import { Context } from "../store/appContext.js";
import { Link } from "react-router-dom";
import "../../styles/register_form.scss";

export const RegisterModal = () => {
	const { store, actions } = useContext(Context);
	let alert = (
		<div className="warning-alert-style container">
			<p id="emailHelp" className="alert-text-color text-center">
				Las contraseñas no coinciden.
			</p>
		</div>
	);

	return (
		<div className="form-pet-container">
			<form
				onSubmit={event => {
					event.preventDefault();
					actions.registerUser(actions.MyRegisterInputReciver());
				}}>
				{" "}
				<button
					type="button"
					className="close"
					data-dismiss="modal"
					aria-label="Close"
					onClick={() => actions.showComponent()}>
					<span aria-hidden="true">&times;</span>
				</button>
				{store.warning ? alert : null}
				<div className="form-group">
					<label htmlFor="name">Nombre</label>
					<input type="text" className="form-control" id="name" placeholder="Nombre" required />
				</div>
				<div className="form-group">
					<label htmlFor="last_name">Apellido</label>
					<input type="ext" className="form-control" id="last_name" placeholder="Apellido" required />
				</div>
				<div className="form-group">
					<label htmlFor="email">Email</label>
					<input
						type="email"
						className="form-control"
						id="email"
						aria-describedby="emailHelp"
						placeholder="Email"
						required
					/>
				</div>
				<div className="form-group">
					<label htmlFor="password">Password</label>
					<input
						type="password"
						className="form-control"
						id="password"
						placeholder="Password"
						minLength="8"
						required
					/>
				</div>
				<div className="form-group">
					<label htmlFor="repeatPassword">Repiete el password</label>
					<input
						type="password"
						className="form-control"
						id="repeatPassword"
						placeholder="Password"
						minLength="8"
						required
					/>
				</div>
				<button type="submit" className="modal-button--submit-style my-3">
					Registrarse
				</button>
			</form>
		</div>
	);
};
