import React, { useContext, useState } from "react";
import { Context } from "../store/appContext.js";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "../../styles/delete_modal.scss";

export const DeleteModal = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="open-modal--delete-blur">
			<div className="delete--modal-container-style">
				<button
					type="button"
					className="delete--modal-close-button"
					data-dismiss="modal"
					aria-label="Close"
					onClick={() => {
						actions.setShowDeleteModal();
					}}>
					<span aria-hidden="true">&times;</span>
				</button>
				<div className="delete--modal-body-align">
					<p>¿Seguro que quieres borrar tu cuenta?</p>
					<button
						className="delete--modal-button-style"
						onClick={() => {
							actions.deleteAcount();
							actions.setShowDeleteModal();
						}}>
						Borrar
					</button>
				</div>
			</div>
		</div>
	);
};
