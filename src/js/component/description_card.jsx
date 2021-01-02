import React, { useContext, useState } from "react";
import "../../styles/description_card.scss";
import { Context } from "../store/appContext.js";
import { useParams } from "react-router-dom";
import { storage } from "../firebase/firebase_config";

export const DescriptionCard = () => {
	const [dislpayForm, setdislpayForm] = useState(false);
	const [image, setImage] = useState(null);
	const [imgURL, setImgUrl] = useState("");
	const [progress, setProgress] = useState(0);
	const { store, actions } = useContext(Context);
	let id_user = useParams();
	const userToFind = store.users.find(user => user.id == id_user.id_user);

	const proFileToFind = store.profiles.find(profile => profile.id == id_user.id_user);

	let handleChange = event => {
		if (event.target.files[0]) {
			setImage(event.target.files[0]);
		}
	};
	console.log("image: ", image);

	let handleUpload = () => {
		const uploadTask = storage.ref("images/" + image.name).put(image);
		uploadTask.on(
			"state_changed",
			snapshot => {
				const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
				setProgress(progress);
			},
			error => {
				console.log(error);
			},
			() => {
				storage
					.ref("images")
					.child(image.name)
					.getDownloadURL()
					.then(url => {
						actions.SetUserImageURL(url);
					});
			}
		);
	};

	if (userToFind == undefined) {
		return (
			<div className="description--card-size">
				<div className="description--card--body-style">
					<p>{proFileToFind.biografy}</p>
				</div>
				<div className="description--card--footer-style">
					<p> Telf: {proFileToFind.phone} </p>
					<p> Dirección: {proFileToFind.location} </p>
					<p> Email: {proFileToFind.email} </p>
				</div>
			</div>
		);
	} else {
		if (dislpayForm == false) {
			return (
				<div className="description--card-size">
					<button onClick={() => setdislpayForm(true)}>
						Editar perfil <i className="fas fa-edit" />
					</button>
					<div className="description--card--body-style">
						<p>{userToFind.biografy}</p>
					</div>
					<div className="description--card--footer-style">
						<p> Telf: {userToFind.phone} </p>
						<p> Dirección: {userToFind.location} </p>
						<p> Email: {userToFind.email} </p>
					</div>
				</div>
			);
		} else {
			return (
				<div className="description--card-size">
					<button
						onClick={() => {
							setdislpayForm(false);
							actions.updateUser(imgURL);
							window.location.reload();
						}}>
						Guardar cambios <i className="fas fa-check-circle" />
					</button>
					<label htmlFor="name">Nombre</label>
					<input
						type="text"
						className="input"
						name="name"
						id="name"
						required
						defaultValue={userToFind.name}
					/>
					<label htmlFor="last_name">Apellidos</label>
					<input
						type="text"
						className="input"
						name="last_name"
						id="last_name"
						required
						defaultValue={userToFind.last_name}
					/>
					<label htmlFor="email">Email</label>
					<input
						type="email"
						className="input"
						name="email"
						id="email"
						required
						defaultValue={userToFind.email}
					/>
					<label htmlFor="phone">Teléfono</label>
					<input
						type="text"
						className="input"
						name="phone"
						id="phone"
						required
						defaultValue={userToFind.phone}
					/>
					<label htmlFor="location">Dirección</label>
					<input
						type="text"
						className="input"
						name="location"
						id="location"
						required
						defaultValue={userToFind.location}
					/>
					<label htmlFor="biografy">Sobre mi</label>
					<textarea
						type="text"
						className="input"
						name="biografy"
						id="biografy"
						required
						defaultValue={userToFind.biografy}
					/>
					<label htmlFor="img">IMG</label>
					<progress value={progress} max="100" />
					<input type="file" className="input-file" name="img" id="img" onChange={handleChange} required />
					<button onClick={handleUpload}>Subir imagen</button>
				</div>
			);
		}
	}
};
