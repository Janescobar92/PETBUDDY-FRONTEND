import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.js";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import SearchIcon from "@material-ui/icons/Search";
import "../../styles/search.scss";

export const Search = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="searcher">
			<Autocomplete
				freeSolo
				id="searcher"
				disableClearable
				options={Services.map(option => option.title)}
				style={{ width: "40rem" }}
				renderInput={params => (
					<TextField
						{...params}
						label="Busca un Servicio"
						margin="normal"
						variant="outlined"
						InputProps={{ ...params.InputProps, type: "search" }}
						color="dark"
					/>
				)}
			/>
			<button
				className="button-searcher"
				type="button"
				onClick={() => {
					actions.serviceSearcherWindowreaload(document.querySelector("#searcher").value);
				}}>
				<i className="fas fa-search" />
			</button>
		</div>
	);
};

const Services = [
	{ title: "Veterinario" },
	{ title: "Paseador" },
	{ title: "Adiestrador" },
	{ title: "Hotel" },
	{ title: "Cuidador" }
];
