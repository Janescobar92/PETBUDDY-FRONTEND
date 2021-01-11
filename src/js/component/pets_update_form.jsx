import React, { useContext, useState } from "react";
import "../../styles/pets_form.scss";
import { Context } from "../store/appContext.js";
import { storage } from "../firebase/firebase_config";

export const UpdatePetsForm = () => {
	const { store, actions } = useContext(Context);
	const [image, setImage] = useState(null);
	// const [imgURL, setImgUrl] = useState("");

	const animal = store.animals.map((eachAnimal, index) => {
		return eachAnimal;
	});

	let handleChange = event => {
		if (event.target.files[0]) {
			setImage(event.target.files[0]);
		}
	};
	console.log("image: ", image);

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
							console.log(url);
						})
						.then(() => actions.updateUserPet(animalToFind.image))
						.then(() => actions.setShowLogin());
				}
			);
		} else {
			actions.updateUserPet(animalToFind.image);
			actions.setShowLogin();
		}
	};

	let selectOptions = store.animal_type.map((eachAnimalType, index) => {
		if (store.animal_type.length != 0) {
			return (
				<option value={eachAnimalType} key={index}>
					{eachAnimalType}
				</option>
			);
		} else {
			("cargando tipos de mascotas");
		}
	});

	let selectOptionsCharacter = store.pets_character.map((eachPetCharacter, index) => {
		if (store.pets_character.length != 0) {
			return (
				<option value={eachPetCharacter} key={index}>
					{eachPetCharacter}
				</option>
			);
		} else {
			("cargando personalidad de tu mascota");
		}
	});

	const animalToFind = store.animals.find(animal => animal.id == store.indexChoosed);
	if (store.animal_type.length != 0 || store.pets_character.length != 0) {
		return (
			<div className="form-pet-container align-self-center my-3 container">
				<form
					onSubmit={event => {
						event.preventDefault();
						handleUpload();
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
					<div className="d-flex flex-row justify-content-between align-items-center" />
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
						<label htmlFor="Pet type">Tipo de mascota</label>
						<select
							type="select"
							className="input"
							name="Pet type"
							id="type"
							required
							defaultValue={animalToFind.animal_type}>
							<option value={null} selected disabled>
								Seleccionar
							</option>
							{selectOptions}
						</select>
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
								Seleccionar
							</option>
							{selectOptionsCharacter}
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
								Seleccionar
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
	} else {
		return "cargando formulario";
	}
};
