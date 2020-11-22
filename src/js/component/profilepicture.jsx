import React from "react";
import "../../styles/jumbotron.scss";

export const ProfilePicture = () => {
	return (
		<div>
			<div className="jumbotron-profile-picture-shape">
				<img
					src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?cs=srgb&dl=pexels-pixabay-415829.jpg&fm=jpg"
					alt="Profile picture"
				/>
			</div>
		</div>
	);
};
