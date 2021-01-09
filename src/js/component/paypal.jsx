import React, { useContext, useEffect } from "react";
import PropTypes from "prop-types";

export const PayPalButton = props => {
	paypal
		.Buttons({
			createOrder: function(data, actions) {
				// This function sets up the details of the transaction, including the amount and line item details.
				return actions.order.create({
					purchase_units: [
						{
							amount: {
								value: props.price
							}
						}
					]
				});
			}
		})
		.render("#paypal-button-container");
	return <div id="paypal-button-container" />;
};
PayPalButton.propTypes = {
	price: PropTypes.string
};
