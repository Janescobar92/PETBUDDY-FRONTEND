import React, { useContext } from "react";
import "../../styles/pets_form.scss";
import { Context } from "../store/appContext.js";

export const PetsForm = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="form-pet-container">
			<label htmlFor="pet_name">Nombre</label>
			<input type="text" className="input" name="pet_name" id="name" />
			<label htmlFor="Pet type">Tipo de mascota</label>
			<select type="select" className="input" name="Pet type" id="type">
				<option value="True" selected disabled>
					Selecionar
				</option>
				<option value="perro">Perro</option>
				<option value="gato">Gato</option>
				<option value="conejo">Conejo</option>
				<option value="roedores">Roedores</option>
				<option value="aves">Aves</option>
			</select>
			<label htmlFor="Age">Edad</label>
			<input type="text" className="input" name="Age" id="age" />
			<label htmlFor="Personality">Carácter</label>
			<select type="select" className="input" name="Personality" id="personality">
				<option value="True" selected disabled>
					Selecionar
				</option>
				<option value="amigable">Amigable</option>
				<option value="dominante">Dominante</option>
				<option value="nervioso">Nervioso</option>
				<option value="agresivo">Agresivo</option>
				<option value="jugueton">Jugueton</option>
			</select>
			<label htmlFor="Weight">Peso/kg</label>
			<input type="number" className="input" name="Weight" id="weight" />
			<label htmlFor="Size">Tamaño/cm</label>
			<input type="number" className="input" name="Size" id="size" />
			<label htmlFor="Gender">Género</label>
			<select type="select" className="input" name="Gender" id="gender">
				<option value="True" selected disabled>
					Selecionar
				</option>
				<option value="True">Hembra</option>
				<option value="False">Macho</option>
			</select>
			<label htmlFor="Affections">Afeciones</label>
			<input type="text" className="input" name="Affections" id="affections" />
			<label htmlFor="Sterilized">Esterilizado</label>
			<select type="select" className="input" name="Sterilized" id="sterilized">
				<option value="True" selected disabled>
					Selecionar
				</option>
				<option value="True">Si</option>
				<option value="False">No</option>
			</select>
			<label htmlFor="Img">Img</label>
			<input type="file" name="Img" className="input" accept="image/jpg" id="img" />
			<div>
				<button
					onClick={() => {
						actions.MyPetsInputReciver(), actions.handleClick();
					}}>
					Crear
				</button>
				<button>Borrar</button>
			</div>
		</div>
	);
};
