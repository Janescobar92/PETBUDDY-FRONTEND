import React, { useContext, useState } from "react";
import "../../styles/pets_form.scss";
import { Context } from "../store/appContext.js";
import { storage } from "../firebase/firebase_config";

export const PetsForm = () => {
	const { store, actions } = useContext(Context);
	const [image, setImage] = useState(null);

	let handleChange = event => {
		if (event.target.files[0]) {
			setImage(event.target.files[0]);
		}
	};

	let handleUpload = async () => {
		if (image != null) {
			const uploadTask = storage.ref("images/" + image.name).put(image);
			uploadTask.on(
				"state_changed",
				snapshot => {},
				error => {
					console.log(error);
				},
				() => {
					storage
						.ref("images")
						.child(image.name)
						.getDownloadURL()
						.then(url => {
							actions.SetPetImageURL(url);
						})
						.then(() => actions.createUserPet(actions.createPetForm()))
						.then(() => actions.showComponent());
				}
			);
		} else {
			actions.createUserPet(actions.createPetForm());
			actions.showComponent();
		}
	};

	return (
		<div className="form-pet-container align-self-center my-3 container">
			<form
				action="#"
				onSubmit={event => {
					event.preventDefault();
					handleUpload();
				}}>
				<div className="d-flex flex-row justify-content-between align-items-center">
					<label htmlFor="pet_name">Nombre</label>
					<input type="text" className="input" name="pet_name" id="name" required />
				</div>
				<div className="d-flex flex-row justify-content-between align-items-center">
					<label htmlFor="Pet type">Tipo de mascota</label>
					<select type="select" className="input" name="Pet type" id="type" required>
						<option value={null} selected disabled>
							Seleccionar
						</option>
						<option value={store.animal_type[0]}>Perro</option>
						<option value={store.animal_type[1]}>Gato</option>
						<option value={store.animal_type[2]}>Conejo</option>
						<option value={store.animal_type[3]}>Roedores</option>
						<option value={store.animal_type[4]}>Aves</option>
					</select>
				</div>
				<div className="d-flex flex-row justify-content-between align-items-center">
					<label htmlFor="Age">Edad</label>
					<input type="text" className="input" name="Age" id="age" required maxLength="2" />
				</div>
				<div className="d-flex flex-row justify-content-between align-items-center">
					<label htmlFor="Personality">Carácter</label>
					<select type="select" className="input" name="Personality" id="personality" required>
						<option value={null} selected disabled>
							Seleccionar
						</option>
						<option value={store.pets_character[0]}>Amigable</option>
						<option value={store.pets_character[1]}>Dominante</option>
						<option value={store.pets_character[2]}>Nervioso</option>
						<option value={store.pets_character[3]}>Agresivo</option>
						<option value={store.pets_character[4]}>Jugueton</option>
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
						<option value={true} selected disabled>
							Seleccionar
						</option>
						<option value={true}>Hembra</option>
						<option value={false}>Macho</option>
					</select>
				</div>
				<div className="d-flex flex-row justify-content-between align-items-center">
					<label htmlFor="Affections">Achaques</label>
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
						<option value={false} selected disabled>
							Seleccionar
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
					onChange={handleChange}
				/>
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
