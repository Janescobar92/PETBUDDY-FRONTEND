import React, { useContext } from "react";

import { Context } from "../store/appContext.js";
import { Link } from "react-router-dom";
import "../../styles/register_form.scss";

export const RegisterModal = () => {
	return (
		<div className="form-pet-container">
			<form>
				<div className="form-group">
					<label htmlFor="exampleInputPassword1">Nombre</label>
					<input type="text" className="form-control" id="exampleInputPassword1" placeholder="Nombre" />
				</div>
				<div className="form-group">
					<label htmlFor="exampleInputPassword1">Apellido</label>
					<input type="ext" className="form-control" id="exampleInputPassword1" placeholder="Apellido" />
				</div>
				<div className="form-group">
					<label htmlFor="exampleInputEmail1">Email</label>
					<input
						type="email"
						className="form-control"
						id="exampleInputEmail1"
						aria-describedby="emailHelp"
						placeholder="Email"
					/>
					<small id="emailHelp" className="form-text text-muted">
						No compartiremos nunca tus datos
					</small>
				</div>
				<div className="form-group">
					<label htmlFor="exampleInputPassword1">Password</label>
					<input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
				</div>
				<div className="form-group">
					<label htmlFor="exampleInputPassword1">Password</label>
					<input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
				</div>

				<button type="submit" className="btn btn-primary">
					Submit
				</button>
			</form>
		</div>
	);
};
