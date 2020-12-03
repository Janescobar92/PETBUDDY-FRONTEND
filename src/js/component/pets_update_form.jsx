import React, { useContext } from "react";
import "../../styles/pets_form.scss";
import { Context } from "../store/appContext.js";

export const UpdatePetsForm = () => {
	const { store, actions } = useContext(Context);
	// let resultIndex = -1;
	// for (let index = 0; index < store.animals.length; index++) {
	// 	if (store.animals[index].id == store.indexChoosed) {
	// 		resultIndex = index;
	// 	}
	// }

	const animalToFind = store.animals.find(animal => animal.id == store.indexChoosed);

	return (
		<div className="form-pet-container align-self-center my-3 container">
			<form
				onSubmit={event => {
					actions.updateUserPet();
					actions.setShowLogin();
					event.preventDefault();
				}}>
				<div className="d-none">
					<label htmlFor="ID">id</label>
					<input
						type="nummber"
						className="input"
						name="ID"
						id="id"
						required
						defaultValue={animalToFind.id}
						disabled
					/>
				</div>
				<div className="d-flex flex-row justify-content-between align-items-center">
					<label htmlFor="pet_name">Nombre</label>
					<input
						type="text"
						className="input"
						name="pet_name"
						id="name"
						required
						defaultValue={animalToFind.name}
					/>
				</div>
				<div className="d-flex flex-row justify-content-between align-items-center">
					<label htmlFor="Pet type">Tipo de mascota</label>
					<select
						type="select"
						className="input"
						name="Pet type"
						id="type"
						required
						defaultValue={animalToFind.animal_type}>
						<option value={null} selected disabled>
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
					<input
						type="text"
						className="input"
						name="Age"
						id="age"
						required
						maxLength="2"
						defaultValue={animalToFind.age}
					/>
				</div>
				<div className="d-flex flex-row justify-content-between align-items-center">
					<label htmlFor="Personality">Carácter</label>
					<select
						type="select"
						className="input"
						name="Personality"
						id="personality"
						required
						defaultValue={animalToFind.personality}>
						<option value={null} selected disabled>
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
					<input
						type="text"
						className="input"
						name="Weight"
						id="weight"
						required
						maxLength="4"
						defaultValue={animalToFind.weight}
					/>
				</div>
				<div className="d-flex flex-row justify-content-between align-items-center">
					<label htmlFor="Size">Tamaño/cm</label>
					<input
						type="text"
						className="input"
						name="Size"
						id="size"
						required
						maxLength="4"
						defaultValue={animalToFind.size}
					/>
				</div>
				<div className="d-flex flex-row justify-content-between align-items-center">
					<label htmlFor="Gender">Género</label>
					<select
						type="select"
						className="input"
						name="Gender"
						id="gender"
						required
						defaultValue={animalToFind.gender ? "Hembra" : "Macho"}>
						<option value={null} selected disabled>
							Selecionar
						</option>
						<option value={true}>Hembra</option>
						<option value={false}>Macho</option>
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
						defaultValue={animalToFind.diseases}
					/>
				</div>
				<div className="d-flex flex-row justify-content-between align-items-center">
					<label htmlFor="Sterilized">Esterilizado</label>
					<select
						type="select"
						className="input"
						name="Sterilized"
						id="sterilized"
						required
						defaultValue={animalToFind.sterilized ? "Si" : "No"}>
						<option value={null} selected disabled>
							Selecionar
						</option>
						<option value={true}>Si</option>
						<option value={false}>No</option>
					</select>
				</div>
				<label htmlFor="Img">Img</label>
				<input
					type="file"
					name="Img"
					className="input-file my-2 col-sm-12"
					accept="image/jpg"
					id="Img"
					defaultValue={animalToFind.image}
				/>
				<div className="form-button-style container">
					<button onClick={() => actions.setShowLogin()}>
						<i className="fas fa-minus-circle" />
					</button>
					<button type="submit">
						<i className="fas fa-check-circle" />
					</button>
				</div>
			</form>
		</div>
	);
};
