import React, { useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Context } from "../store/appContext.js";

export const PayPalButton = props => {
	const { store, actions } = useContext(Context);

	let PaypalOrderObject = order => {
		let opperation = {
			user_who_hired: actions.logedStore(),
			hired_time: 1,
			service_id_hired: order.purchase_units[0].reference_id,
			total_price: order.purchase_units[0].amount.value,
			date: order.update_time
		};
		actions.PaypalPayment(opperation);
	};

	useEffect(() => {
		paypal
			.Buttons({
				createOrder: (data, action, err) => {
					return action.order.create({
						intent: "CAPTURE",
						purchase_units: [
							{
								description: props.description,
								reference_id: props.service_id_hired,
								amount: {
									currenci_code: "EUR",
									value: props.price
								}
							}
						]
					});
				},
				onApprove: async (data, action) => {
					const order = await action.order.capture();
					PaypalOrderObject(order);
				},
				onError: err => {
					console.log(err);
				}
			})
			.render("#paypal-button");
	}, []);
	return <span className="d-flex" id="paypal-button" />;
};
PayPalButton.propTypes = {
	price: PropTypes.string,
	description: PropTypes.string,
	service_id_hired: PropTypes.number
};
