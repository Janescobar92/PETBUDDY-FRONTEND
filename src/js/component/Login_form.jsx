import React, { useContext, useState } from "react";
import loginImg from "../../assets/img/runnign_with_cat_petbuddy.png";
import { Context } from "../store/appContext.js";
import { Link } from "react-router-dom";
// import "../../styles/register_form.scss";
import "../../styles/login_form.scss";

export const LoginModal = () => {
	const { store, actions } = useContext(Context);
	let alert = (
		<div className="warning-alert-style container">
			<p className="alert-text-color text-center">La contraseña o el usuario no coinciden.</p>
		</div>
	);

	return (
		// <div className="modal-login-style">
		<div className="form-login-container">
			<button
				type="button"
				className="login-close-button"
				data-dismiss="modal"
				aria-label="Close"
				onClick={() => actions.setShowLogin()}>
				<span aria-hidden="true">&times;</span>
			</button>
			<img src={loginImg} alt="get started img" className="login-img-size" />
			<div className="form-subcard-container">
				<form
					onSubmit={event => {
						actions.login(actions.MyLoginInputReciver());
						event.preventDefault();
					}}>
					{" "}
					<div className="form-group">
						{store.warning ? alert : null}
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
					<button type="submit" className="modal-button--submit-style my-3 container">
						Login
					</button>
				</form>
			</div>
		</div>
		// </div>
	);
};
