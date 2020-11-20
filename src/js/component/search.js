import React from "react";
import { Link } from "react-router-dom";

import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import SearchIcon from "@material-ui/icons/Search";

export const Search = () => {
	return (
		<Link to="/services">
			<div className="searcher">
				<Autocomplete
					freeSolo
					id="free-solo-2-demo"
					disableClearable
					options={Services.map(option => option.title)}
					renderInput={params => (
						<TextField
							/*  <SearchIcon/>  */
							{...params}
							label="icono Search"
							margin="normal"
							/*  left: 3.33%;
                        right: 3.61%;
                        top: 47.66%;
                        bottom: 46.41%;

                        background: #C4C4C4;
                        opacity: 0.15;
                        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.35);
                        border-radius: 10px; */
							variant="outlined"
							InputProps={{ ...params.InputProps, type: "search" }}
						/>
					)}
				/>
			</div>
		</Link>
	);
};

const Services = [
	{ title: "Veterinary", year: 1994 },
	{ title: "The Godfather", year: 1972 },
	{ title: "The Godfather: Part II", year: 1974 },
	{ title: "The Dark Knight", year: 2008 },
	{ title: "12 Angry Men", year: 1957 },
	{ title: "Schindler's List", year: 1993 }
];
