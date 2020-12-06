const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			user_id: 1,
			users: [],
			animals: [
				{
					id: 1,
					user_id: 1,
					name: "Pluto",
					image: "https://i.ebayimg.com/images/g/apgAAOSwd4tT5JgM/s-l300.jpg",
					animal_type: "perro",
					age: 3,
					personality: "amigable",
					gender: false,
					weight: 20.0,
					size: 40.0,
					diseases: "no tiene",
					sterilized: true
				}
			],
			user_services: [
				{
					id: 1,
					service_id: 1,
					service: "Paseador",
					date: "18 de Nov",
					price: 20.0
				}
			],
			services: [
				{
					id: 1,
					service: "Paseador",
					description: "Animals mean all to me.",
					price: 20.0,
					image:
						"https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
				}
			],
			yove_worked_history: []
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
