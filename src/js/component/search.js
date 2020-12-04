import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.js";

import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import SearchIcon from "@material-ui/icons/Search";
import "../../styles/search.scss";

export const Search = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="searcher row">
			<Autocomplete
				freeSolo
				id="searcher"
				disableClearable
				options={Services.map(option => option.title)}
				style={{ width: "40rem" }}
				renderInput={params => (
					<TextField
						{...params}
						label="Busca Servicio"
						margin="normal"
						variant="outlined"
						InputProps={{ ...params.InputProps, type: "search" }}
					/>
				)}
			/>
			<Link to="/services">
				<button
					className="button-searcher"
					type="button"
					onClick={() => {
						actions.getTypeServices(document.querySelector("#searcher").value);
					}}>
					<i className="fas fa-search" />
				</button>
			</Link>
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
