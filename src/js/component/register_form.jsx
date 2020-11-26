import React, { useContext } from "react";

import { Context } from "../store/appContext.js";
import { Link } from "react-router-dom";
import "../../styles/register_form.scss";

export const RegisterModal = () => {
	const { store, actions } = useContext(Context);
	return (
		<div className="form-pet-container">
			<form
				onSubmit={event => {
					event.preventDefault();
					actions.registerUser(actions.MyRegisterInputReciver());
					actions.showComponent();
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
				<div className="form-group">
					<label htmlFor="name">Nombre</label>
					<input type="text" className="form-control" id="name" placeholder="Nombre" />
				</div>
				<div className="form-group">
					<label htmlFor="last_name">Apellido</label>
					<input type="ext" className="form-control" id="last_name" placeholder="Apellido" />
				</div>
				<div className="form-group">
					<label htmlFor="email">Email</label>
					<input
						type="email"
						className="form-control"
						id="email"
						aria-describedby="emailHelp"
						placeholder="Email"
					/>
					<small id="emailHelp" className="form-text text-muted">
						No compartiremos nunca tus datos
					</small>
				</div>
				<div className="form-group">
					<label htmlFor="password">Password</label>
					<input type="password" className="form-control" id="password" placeholder="Password" />
				</div>
				{/* <div className="form-group">
					<label htmlFor="password">Password</label>
					<input type="password" className="form-control" id="password" placeholder="Password" />
				</div> */}
				<button type="submit" className="btn btn-primary">
					Submit
				</button>
			</form>
		</div>
	);
};
