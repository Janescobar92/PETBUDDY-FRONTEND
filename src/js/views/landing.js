import React, { useContext } from "react";
import { Jumbotron } from "../component/jumbotron.jsx";
import { RegisterModal } from "../component/register_form.jsx";
import { Context } from "../store/appContext.js";

export const Landing = () => {
	const { store, actions } = useContext(Context);

	return (
		<div>
			<Jumbotron view="landing" />
			{store.show ? <RegisterModal /> : null}
			{store.show ? <div className="open-modal-blur" /> : null}
		</div>
	);
};
