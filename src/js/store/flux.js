const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			user_id: 1,
			users: [],
			animals: [],
			user_services: [],
			services: [],
			yove_worked_history: [],
			hired_history: []
		},
		actions: {
			getWhoHireYouHistory: () => {
				fetch("https://3000-c948bd0b-ac9d-4c50-a69e-4fc330593eb4.ws-eu03.gitpod.io/user/workedfor/1", {
					method: "GET"
				})
					.then(response => {
						if (!response.ok) {
							throw Error(response.status);
						}
						return response.json();
					})
					.then(responseAsJson => {
						console.log(responseAsJson);
						var operationData = responseAsJson;
						setStore({ yove_worked_history: [...getStore().yove_worked_history, operationData].flat() });
					})
					.catch(error => {
						console.log("Error status: ", error);
					});
			},
			getYourHireHistory: () => {
				fetch("https://3000-c948bd0b-ac9d-4c50-a69e-4fc330593eb4.ws-eu03.gitpod.io/user/hired/1", {
					method: "GET"
				})
					.then(response => {
						if (!response.ok) {
							throw Error(response.status);
						}
						return response.json();
					})
					.then(responseAsJson => {
						console.log(responseAsJson);
						var operationData = responseAsJson;
						setStore({ hired_history: [...getStore().hired_history, operationData].flat() });
					})
					.catch(error => {
						console.log("Error status: ", error);
					});
			},
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
                fetch().then().then(data => setStore({ "foo": data.bar }))
            */
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
