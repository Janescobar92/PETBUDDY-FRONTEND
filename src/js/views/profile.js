import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import { PetsCardContainer } from "../component/pets-cards-container.jsx";
import { PetsForm } from "../component/pets_form.jsx";

export const Profile = () => {
	return (
		<div>
			<PetsCardContainer />
		</div>
	);
};
