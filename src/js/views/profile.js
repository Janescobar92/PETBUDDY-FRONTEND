import React, { useState, useEffect, useContext, Fragment } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import { PetsCardContainer } from "../component/pets-cards-container.jsx";
import { Jumbotron } from "../component/jumbotron.jsx";

export const Profile = () => {
	<p>Hello</p>;
	return (
		<div>
			<Jumbotron />
			<PetsCardContainer />
		</div>
	);
};
