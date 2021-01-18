import React, { useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import PropTypes from "prop-types";
import { Context } from "../store/appContext.js";
import { Jumbotron } from "../component/jumbotron.jsx";
import { HorizontalCard } from "../component/h_card.js";

export const Services = () => {
	const { store, actions } = useContext(Context);
	const service_type = useParams();

	useEffect(() => {
		actions.getTypeServices(service_type.service_type);
	}, []);

	const cards = store.services.map((item, index) => {
		let distances = actions.SearchDistance(item.id_user_offer);
		store.serviceID = item.id_service_type;
		if (actions.logedStore() != item.id_user_offer) {
			return (
				<Link style={{ textDecoration: "none" }} key={index} to={"/outprofile/" + item.id_user_offer}>
					<HorizontalCard
						key={index}
						source={item.image}
						name={item.name}
						service={item.id_service_type}
						price={item.price_h}
						distance={distances}
						description={item.description}
					/>
				</Link>
			);
		}
	});
	return (
		<div>
			<Jumbotron view="nearby" title={service_type.service_type} />
			{cards}
		</div>
	);
};
