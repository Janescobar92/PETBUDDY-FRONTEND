const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			users: [],
			services: [],
			show: false,
			route: "https://3000-bc7556ef-62e8-43ac-a019-abab4e6e0d7c.ws-eu03.gitpod.io"
		},
		actions: {
			deleteService: id_service_type => {
				if (id_service_type == "Paseador") id_service_type = 1;
				if (id_service_type == "Cuidador") id_service_type = 2;
				if (id_service_type == "Hotel") id_service_type = 3;
				if (id_service_type == "Adiestrador") id_service_type = 4;
				if (id_service_type == "Veterinario") id_service_type = 5;

				fetch(getStore().route + "/user/1/" + id_service_type, {
					method: "DELETE"
				})
					.then(response => {
						if (!response.ok) {
							throw new Error(response.status);
						}
						return response.json();
					})
					.then(answerUpload => {
						getActions().getUserServices();
						console.log("Success: service deleted");
					})
					.catch(error => {
						console.log("Error status: ", error);
					});
			},
			addService: serviceData => {
				if (getActions().getUserServicesDisabled(serviceData.id_service_type)) {
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
				} else {
					getActions().updateUserService(serviceData);
				}
			},
			updateUserService: serviceData => {
				fetch(getStore().route + "/user/1/service", {
					method: "PUT",
					body: JSON.stringify(serviceData),
					headers: {
						"Content-Type": "application/json"
					}
				})
					.then(response => response.json())
					.then(answerUpload => {
						console.log("Success Update: ", JSON.stringify(answerUpload));
						getActions().getUserServices();
						/* setStore({ services: [...getStore().services, serviceData] }); */
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
						serviceData.map(service => {
							if (service.id_service_type == 1) service.id_service_type = "Paseador";
							if (service.id_service_type == 2) service.id_service_type = "Cuidador";
							if (service.id_service_type == 3) service.id_service_type = "Hotel";
							if (service.id_service_type == 4) service.id_service_type = "Adiestrador";
							if (service.id_service_type == 5) service.id_service_type = "Veterinario";
						});
						if (serviceData.length != getStore().services.length) {
							setStore({ services: serviceData });
						}
					})
					.catch(error => {
						console.log("Error status: ", error);
					});
			},

			getTypeServices: id_service_type => {
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
							if (service.id_service_type == 1) service.id_service_type = "Paseador";
							if (service.id_service_type == 2) service.id_service_type = "Cuidador";
							if (service.id_service_type == 3) service.id_service_type = "Hotel";
							if (service.id_service_type == 4) service.id_service_type = "Adiestrador";
							if (service.id_service_type == 5) service.id_service_type = "Veterinario";
						});
						if (serviceData.length != getStore().services.length) {
							setStore({ services: serviceData });
						}
					})
					.catch(error => {
						console.log("Error status: ", error);
					});
			},
			getUserServicesDisabled: id_service_type => {
				fetch(getStore().route + "/user/1/service_disabled", {
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
							if (service.id_service_type == id_service_type) {
								return false;
							} else {
								return true;
							}
						});
					})
					.catch(error => {
						console.log("Error status: ", error);
					});
			},
			MyServicesInputData: () => {
				let serviceType = document.querySelector("#service_type").value;
				let precio = document.querySelector("#precio").value;
				let descripcion = document.querySelector("#descripcion").value;

				if (serviceType == "Paseador") serviceType = 1;
				if (serviceType == "Cuidador") serviceType = 2;
				if (serviceType == "Hotel") serviceType = 3;
				if (serviceType == "Adiestrador") serviceType = 4;
				if (serviceType == "Veterinario") serviceType = 5;
				let newService = {
					id_service_type: serviceType,
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
			}
		}
	};
};

export default getState;
