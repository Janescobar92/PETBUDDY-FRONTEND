import React, { useContext, useState, useEffect } from "react";
import loginImg from "../../assets/img/runnign_with_cat_petbuddy.png";
import notFound from "../../assets/img/not_found_user_img.png";
import { Context } from "../store/appContext.js";
import { Link } from "react-router-dom";
import "../../styles/login_form.scss";

export const LoginModal = () => {
	const { store, actions } = useContext(Context);

	const imglogin = <img src={loginImg} alt="get started img" className="login-img-size" />;
	const imgbadlogin = <img src={notFound} alt="get started img" className="login-img--cat-size" />;
	let Whichimage = store.registeredUsers ? imglogin : imgbadlogin;

	return (
		<div className="form-login-container">
			<button
				type="button"
				className="login-close-button"
				data-dismiss="modal"
				aria-label="Close"
				onClick={() => actions.setShowLogin()}>
				<span aria-hidden="true">&times;</span>
			</button>
			{Whichimage}
			{/* <img src={store.registeredUsers ? loginImg : notFound} alt="get started img" className="login-img-size" /> */}
			<div className="form-subcard-container">
				<form
					onSubmit={event => {
						actions.login(actions.MyLoginInputReciver());
						event.preventDefault();
					}}>
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
	);
};
