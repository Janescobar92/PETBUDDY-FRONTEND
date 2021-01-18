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

	const cards = store.distances.map((item, index) => {
		let each_service = store.services;
		const serviceToFind = each_service.find(service => service.id_user_offer == item.id_user_offer);
		if (actions.logedStore() != item.id_user_offer) {
			return (
				<Link style={{ textDecoration: "none" }} key={index} to={"/outprofile/" + item.id_user_offer}>
					<HorizontalCard
						key={index}
						source={serviceToFind.image}
						name={serviceToFind.name}
						service={serviceToFind.id_service_type}
						price={serviceToFind.price_h}
						distance={item.distance}
						description={serviceToFind.description}
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
