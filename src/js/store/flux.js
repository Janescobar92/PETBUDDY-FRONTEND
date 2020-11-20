const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			ReviewValue: [
				{
					id: 1,
					comerce_id: 1,
					review: 4,
					comment: "Buena experiencia, trato agradable",
					date: "20/11/2020",
					write_by: "Lorella"
				}
			]
		},
		actions: {
			// getReviewValue: URL => {
			// 	fetch(URL)
			// 		.then(response => {
			// 			if (!response.ok) {
			// 				throw Error(response.status);
			// 			}
			// 			return response.json();
			// 		})
			// 		.then(responseAsJson => {
			// 			let planetsContent = responseAsJson.results;
			// 			getActions().setPlanets(planetsContent);
			// 			if (responseAsJson.next) {
			// 				getActions().planetsInfoGatherer(responseAsJson.next.replace(":", "s:"));
			// 			}
			// 		})
			// 		.catch(error => {
			// 			console.log("Error status: ", error);
			// 		});
			// },
			//reset the global store
			//	setStore({ demo: demo });
		}
	};
};

export default getState;
