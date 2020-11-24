import React, { useContext } from "react";
import "../../styles/pets_form.scss";
import { Context } from "../store/appContext.js";

export const ServiceForm = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="form-pet-container align-self-center my-3 container">
			<form
				action="#"
				onSubmit={event => {
					actions.createPet(actions.MyPetsInputReciver());
					actions.showComponent();
					event.preventDefault();
				}}>
				{/* <div className="d-flex flex-row justify-content-between align-items-center">
					<label htmlFor="pet_name">Nombre</label>
					<input type="text" className="input" name="pet_name" id="name" required />
				</div>
				<div className="d-flex flex-row justify-content-between align-items-center">
					<label htmlFor="Pet type">Tipo de mascota</label>
					<select type="select" className="input" name="Pet type" id="type" required>
						<option value="True" selected disabled>
							Selecionar
						</option>
						<option value="perro">Perro</option>
						<option value="gato">Gato</option>
						<option value="conejo">Conejo</option>
						<option value="roedores">Roedores</option>
						<option value="aves">Aves</option>
					</select>
				</div>
				<div className="d-flex flex-row justify-content-between align-items-center">
					<label htmlFor="Age">Edad</label>
					<input type="text" className="input" name="Age" id="age" required maxLength="2" />
				</div>
				<div className="d-flex flex-row justify-content-between align-items-center">
					<label htmlFor="Personality">Carácter</label>
					<select type="select" className="input" name="Personality" id="personality" required>
						<option value="True" selected disabled>
							Selecionar
						</option>
						<option value="amigable">Amigable</option>
						<option value="dominante">Dominante</option>
						<option value="nervioso">Nervioso</option>
						<option value="agresivo">Agresivo</option>
						<option value="jugueton">Jugueton</option>
					</select>
				</div>
				<div className="d-flex flex-row justify-content-between align-items-center">
					<label htmlFor="Weight">Peso/kg</label>
					<input type="text" className="input" name="Weight" id="weight" required maxLength="4" />
				</div>
				<div className="d-flex flex-row justify-content-between align-items-center">
					<label htmlFor="Size">Tamaño/cm</label>
					<input type="text" className="input" name="Size" id="size" required maxLength="4" />
				</div>
				<div className="d-flex flex-row justify-content-between align-items-center">
					<label htmlFor="Gender">Género</label>
					<select type="select" className="input" name="Gender" id="gender" required>
						<option value="True" selected disabled>
							Selecionar
						</option>
						<option value="True">Hembra</option>
						<option value="False">Macho</option>
					</select>
				</div>
				<div className="d-flex flex-row justify-content-between align-items-center">
					<label htmlFor="Affections">Afeciones</label>
					<input
						type="text"
						className="input"
						name="Affections"
						id="affections"
						required
						defaultValue="No tiene"
					/>
				</div>
				<div className="d-flex flex-row justify-content-between align-items-center">
					<label htmlFor="Sterilized">Esterilizado</label>
					<select type="select" className="input" name="Sterilized" id="sterilized" required>
						<option value="True" selected disabled>
							Selecionar
						</option>
						<option value="True">Si</option>
						<option value="False">No</option>
					</select>
				</div> */}
				<label htmlFor="Img">Img</label>
				<input type="file" name="Img" className="input-file my-2 col-sm-12" accept="image/jpg" id="Img" />
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
