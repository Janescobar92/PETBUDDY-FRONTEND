import React, { useContext } from "react";
import { Jumbotron } from "../component/jumbotron.jsx";
import { RegisterModal } from "../component/register_form.jsx";
import { LoginModal } from "../component/Login_form.jsx";
import { Context } from "../store/appContext.js";
import "../../styles/landing.scss";

export const Landing = () => {
	const { store, actions } = useContext(Context);

	return (
		<div>
			<Jumbotron view="landing" />
			{store.show ? <RegisterModal /> : null}
			{store.showLogin ? <LoginModal /> : null}
			{store.showLogin ? <div className="open-modal-blur" /> : null}
			{store.show ? <div className="open-modal-blur" /> : null}
			<section>
				<div>
					<div className="our--services-box--style">
						<h2>Nuestros servicios</h2>
					</div>
					<div className="service-cards--container-flex">
						<div className="services--presentation-card--walker">
							<div className="service-card--title-style" />
						</div>
						<div className="services--presentation-card--daycare">
							<div className="service-card--title-style" />
						</div>
						<div className="services--presentation-card--hotel">
							<div className="service-card--title-style" />
						</div>
						<div className="services--presentation-card--teacher">
							<div className="service-card--title-style" />
						</div>
						<div className="services--presentation-card--vet">
							<div className="service-card--title-style" />
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};
