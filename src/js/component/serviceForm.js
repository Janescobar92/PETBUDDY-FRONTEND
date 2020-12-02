import React, { useContext } from "react";
import "../../styles/service_form.scss";
import { Context } from "../store/appContext.js";

export const ServiceForm = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="service-form-container align-self-center my-3 container">
			<form
				action="#"
				onSubmit={event => {
					actions.addService(actions.MyServicesInputData());
					actions.showComponent();

					event.preventDefault();
				}}>
				<h4 style={{ display: "flex", justifyContent: "center" }}>Añade Servicio</h4>
				<div className="d-flex flex-row justify-content-between align-items-center">
					<label htmlFor="Service_Type">Tipo de Servicio</label>
					<select type="select" className="input" name="Service_Type" id="service_type" required>
						<option value="True" selected disabled>
							Selecionar
						</option>
						<option value="paseador">Paseador</option>
						<option value="cuidador">Cuidador</option>
						<option value="hotel">Hotel</option>
					</select>
				</div>
				<div className="d-flex flex-row justify-content-between align-items-center">
					<label htmlFor="Precio">Precio</label>
					<div>
						<input type="text" className="input" name="Precio" id="precio" required maxLength="4" />
						{/* <p>(€/h)</p> */}
					</div>
				</div>
				<div className="d-flex flex-colum justify-content-between align-items-center">
					<label htmlFor="Descripcion">Descripcion:</label>
					<input type="text" className="input" name="Descripcion" id="descripcion" required />
				</div>
				<div className="form-button-style container">
					<button onClick={() => actions.showComponent()}>
						<i className="fas fa-minus-circle" />
					</button>
					<button type="submit">
						<i className="fas fa-plus-circle" />
					</button>
				</div>
			</form>
		</div>
	);
};
