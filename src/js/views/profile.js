import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import { ServiceCardContainer } from "../component/service_card_container";
import { Jumbotron } from "../component/jumbotron_profile.js";
export const Profile = () => {
	const { store, actions } = useContext(Context);
	<p>Hello</p>;
	return (
		<div>
			<Jumbotron name={store.user.name} img={store.user.image} />
			<ServiceCardContainer />
		</div>
	);
};
