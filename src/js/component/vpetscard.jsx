import React from "react";

export const PetsCard = () => {
	return (
		<div className="card" style={{ width: "18rem" }}>
			<div className="card-header">
				Name
				<img className="card-img-top" src="..." alt="pet" />
				<a href="#" className="btn btn-primary">
					Edit
				</a>
			</div>
			<div className="card-body">
				<h5 className="card-title">Info</h5>
				<p className="card-text">Mi --- se llama ---, Tiene --- años.</p>
				<p className="card-text">Es --- ---- pesa ---- y tiene in tamaño de ---, es ----.</p>
				<p className="card-text">Affecciones: ---</p>
				<p className="card-text">Sterilizado: ---</p>
			</div>
		</div>
	);
};
