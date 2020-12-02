const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			users: [],
			services: [],
			show: false,
			route: "https://3000-bc7556ef-62e8-43ac-a019-abab4e6e0d7c.ws-eu01.gitpod.io"
		},
		actions: {
			addService: serviceData => {
				fetch(getStore().route + "/user/1/service", {
					method: "POST",
					body: JSON.stringify(serviceData),
					headers: {
						"Content-Type": "application/json"
					}
				})
					.then(response => response.json())
					.then(answerUpload => {
						console.log("Success: ", JSON.stringify(answerUpload));
						setStore({ services: [...getStore().services, serviceData] });
					});
			},
			getUserServices: () => {
				fetch(getStore().route + "/user/1/service", {
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
						serviceData.map((service, index) => {
							if (service.id_service_type == 1) service.id_service_type = "Paseador";
							if (service.id_service_type == 2) service.id_service_type = "Cuidador";
							if (service.id_service_type == 3) service.id_service_type = "Hotel";
						});
						if (serviceData.length != getStore().services.length) {
							setStore({ services: serviceData });
						}
					})
					.catch(error => {
						console.log("Error status: ", error);
					});
			},
			MyServicesInputData: () => {
				let serviceType = document.querySelector("#service_type").value;
				let precio = document.querySelector("#precio").value;
				let descripcion = document.querySelector("#descripcion").value;

				let id_service_type_int = 0;
				if (serviceType == "paseador") id_service_type_int = 1;
				if (serviceType == "cuidador") id_service_type_int = 2;
				if (serviceType == "hotel") id_service_type_int = 3;
				let newService = {
					id_service_type: id_service_type_int,
					price_h: precio,
					description: descripcion
				};
				return newService;
			},
			showComponent: () => {
				if (getStore().show == false) {
					setStore((getStore().show = true));
				} else {
					setStore((getStore().show = false));
				}
			},
			getUser: () => {
				// añadir fetch cuando este el back
				let userData = [
					{
						id: 1,
						email: "carlosjuan1812@gmail.com",
						password: "123456",
						is_active: true,
						name: "Juan Carlos",
						last_name: "Alcalde",
						phone: "605143832",
						location: "calle Alberto Conti",
						biografy: "Me gustan los perros",
						image:
							"https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
					},
					{
						id: 2,
						email: "carlosjuan1812@gmail.com",
						password: "123456",
						is_active: true,
						name: "María",
						last_name: "Theodor",
						phone: "605143832",
						location: "calle Alberto Conti",
						biografy: "Me gustan los gatos",
						image:
							"https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
					}
				];
				setStore({ users: [...getStore().users, userData].flat() });
			},
			// Use getActions to call a function within a fuction
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
