const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			user: [
				{
					id: 1,
					email: "carlosjuan1812@gmail.com",
					password: "123456",
					is_active: true,
					name: "Juan Carlos",
					last_name: "Alcalde",
					phone: "605143832",
					location: "calle Alberto Conti",
					biografy: "Me gusta los perros",
					image:
						"https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
				}
			],
			/* user_services: [
				{
					id: 1,
					service_id: 1,
					service: "Paseador",
					date: "18 de Nov",
					price: 20.0
				}
			], */
			services: [],
			render: false,
			route: "https://3000-bc7556ef-62e8-43ac-a019-abab4e6e0d7c.ws-eu03.gitpod.io"
		},
		actions: {
			// Use getActions to call a function within a fuction
			getTypeServices: id_service_type => {
				console.log(id_service_type, "aaaaaaaaaaaaaa");

				if (id_service_type == "Paseador") {
					id_service_type = 1;
				} else if (id_service_type == "Cuidador") {
					id_service_type = 2;
				} else if (id_service_type == "Hotel") {
					id_service_type = 3;
				} else if (id_service_type == "Adiestrador") {
					id_service_type = 4;
				} else if (id_service_type == "Veterinario") {
					id_service_type = 5;
				}
				console.log(id_service_type, "bbbbbbbbbbbbbb");
				fetch(getStore().route + "/" + id_service_type + "/services", {
					method: "GET"
				})
					.then(response => {
						if (!response.ok) {
							throw Error(response.status);
						}
						return response.json();
					})
					.then(responseAsJson => {
						var serviceData = responseAsJson;
						serviceData.map(service => {
							console.log(service, "en get servicedata");

							if (service.id_service_type == 1) service.id_service_type = "Paseador";
							if (service.id_service_type == 2) service.id_service_type = "Cuidador";
							if (service.id_service_type == 3) service.id_service_type = "Hotel";
							if (service.id_service_type == 4) service.id_service_type = "Adiestrador";
							if (service.id_service_type == 5) service.id_service_type = "Veterinario";
							console.log(service.id_service_type, "en flux gettypeservices");
						});
						/* if (serviceData.length != getStore().services.length) { */
						setStore({ services: serviceData });
						console.log(getStore().services, "es store");
						/* } */
					})
					.catch(error => {
						console.log("Error status: ", error);
					});
			},
			renderPage: () => {
				if (getStore().render == false) {
					setStore((getStore().render = true));
				} else {
					setStore((getStore().render = false));
				}
				console.log(getStore().render);
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
