import React from "react";
import { Jumbotron } from "../component/jumbotron.jsx";
import { RegisterModal } from "../component/register_form.jsx";

export const Landing = () => (
	<div>
		<Jumbotron view="landing" />
		<RegisterModal />
	</div>
);
