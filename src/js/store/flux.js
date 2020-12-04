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
			services: [],
			route: "https://3000-bc7556ef-62e8-43ac-a019-abab4e6e0d7c.ws-eu03.gitpod.io"
		},
		actions: {
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
							if (service.id_service_type == 1) {
								service.id_service_type = "Paseador";
							} else if (service.id_service_type == 2) {
								service.id_service_type = "Cuidador";
							} else if (service.id_service_type == 3) {
								service.id_service_type = "Hotel";
							} else if (service.id_service_type == 4) {
								service.id_service_type = "Adiestrador";
							} else if (service.id_service_type == 5) {
								service.id_service_type = "Veterinario";
							}
						});
						setStore({ services: serviceData });
					})
					.catch(error => {
						console.log("Error status: ", error);
					});
			}
		}
	};
};

export default getState;
