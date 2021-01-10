import { Link } from "react-router-dom";
import jwt_decode from "jwt-decode";
const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			users: [],
			profiles: [],
			animals: [],
			animal_type: [],
			pets_character: [],
			services: [],
			yove_worked_history: [],
			hired_history: [],
			othersPets: [],
			user_services: [],
			otherUserServices: [],
			show: false,
			showService: false,
			showUpdate: false,
			showLogin: false,
			showDeleteModal: false,
			Warnings: false,
			logedUser: null,
			indexChoosed: null,
			registeredUsers: true,
			distances: [],
			route: "https://3000-bc130ebc-7440-47ae-aa7b-4d172a859898.ws-eu03.gitpod.io"
		},
		actions: {
			registerUser: params => {
				fetch(getStore().route + "/register", {
					method: "POST",
					body: JSON.stringify(params),
					headers: {
						"Content-Type": "application/json"
					}
				})
					.then(response => response.json())
					.then(answerUpload => {
						console.log("Success ", 200);
					});
			},
			login: loginData => {
				fetch(getStore().route + "/login", {
					method: "POST",
					body: JSON.stringify(loginData),
					headers: {
						"Content-Type": "application/json"
					}
				})
					.then(response => {
						if (!response.ok) {
							setStore((getStore().registeredUsers = false));
							throw Error(response.status);
						}
						return response.json();
					})
					.then(answerDownload => {
						var token = answerDownload.token;
						localStorage.setItem("x-access-token", token);
						getActions().getLocalSorageToken();
						getActions().logedStore();
						window.location.replace("/home/" + getActions().logedStore());
						console.log("Success: ", 200);
					})
					.catch(error => {
						console.log("User not found", error);
					});
			},
			logOut: () => {
				localStorage.removeItem("x-access-token");
				localStorage.removeItem("logedUser");
				setStore((getStore().logedUser = null));
			},
			getLocalSorageToken: () => {
				var token = localStorage.getItem("x-access-token");
				const decoded = jwt_decode(token);
				localStorage.setItem("logedUser", decoded.id);
				getActions().setLoged(decoded.id);
			},
			getLogedUserPets: () => {
				fetch(getStore().route + "/user/" + getActions().logedStore() + "/pet", {
					method: "GET"
				})
					.then(response => response.json())
					.then(answerDownload => {
						let pets = answerDownload;
						console.log("Success: ", 200);
						setStore({ animals: pets });
					});
			},
			getInputValuesAnimalType: () => {
				fetch(getStore().route + "/animals_type", {
					method: "GET"
				})
					.then(response => response.json())
					.then(answerDownload => {
						console.log("Success: ", 200);
						setStore({ animal_type: [answerDownload].flat() });
					});
			},
			getInputValuesPetCharacters: () => {
				fetch(getStore().route + "/pets_character", {
					method: "GET"
				})
					.then(response => response.json())
					.then(answerDownload => {
						setStore({ pets_character: [answerDownload].flat() });
					});
			},
			createUserPet: petData => {
				fetch(getStore().route + "/user/" + getActions().logedStore() + "/pet", {
					method: "POST",
					body: JSON.stringify(petData),
					headers: {
						"Content-Type": "application/json",
						"x-access-token": localStorage.getItem("x-access-token")
					}
				})
					.then(response => response.json())
					.then(answerUpload => {
						getActions().getLogedUserPets();
						setStore({ animals: [...getStore().animals, petData] });
					});
			},
			createPetForm: () => {
				let myPetName = document.querySelector("#name").value;
				let myPetType = document.querySelector("#type").value;
				let myPetAge = document.querySelector("#age").value;
				let myPetPersonality = document.querySelector("#personality").value;
				let myPetWeight = document.querySelector("#weight").value;
				let myPetSize = document.querySelector("#size").value;
				let myPetGender = document.querySelector("#gender").value;
				let myPetAffections = document.querySelector("#affections").value;
				let myPetIsSterilized = document.querySelector("#sterilized").value;
				let myPetImg = document.querySelector("#Img").value;
				let creatPet = {
					user_id: getActions().logedStore(),
					name: myPetName,
					image: myPetImg,
					animal_type: myPetType,
					age: myPetAge,
					personality: myPetPersonality,
					gender: myPetGender,
					weight: myPetWeight,
					size: myPetSize,
					diseases: myPetAffections,
					sterilized: myPetIsSterilized
				};
				return creatPet;
			},
			updateUserPet: () => {
				fetch(getStore().route + "/user/" + getActions().logedStore() + "/pet", {
					method: "PUT",
					body: JSON.stringify(getActions().updatePetForm()),
					headers: {
						"Content-Type": "application/json"
					}
				})
					.then(response => response.json())
					.then(answerUpload => {
						getActions().getLogedUserPets();
					});
			},
			updatePetForm: () => {
				let myPetID = document.querySelector("#id").value;
				let myPetName = document.querySelector("#name").value;
				let myPetType = document.querySelector("#type").value;
				let myPetAge = document.querySelector("#age").value;
				let myPetPersonality = document.querySelector("#personality").value;
				let myPetWeight = document.querySelector("#weight").value;
				let myPetSize = document.querySelector("#size").value;
				let myPetGender = document.querySelector("#gender").value;
				let myPetAffections = document.querySelector("#affections").value;
				let myPetIsSterilized = document.querySelector("#sterilized").value;
				let myPetImg = document.querySelector("#Img").value;
				let creatPet = {
					user_id: getActions().logedStore(),
					name: myPetName,
					image: myPetImg,
					animal_type: myPetType,
					age: myPetAge,
					personality: myPetPersonality,
					gender: myPetGender,
					weight: myPetWeight,
					size: myPetSize,
					diseases: myPetAffections,
					sterilized: myPetIsSterilized,
					id: parseInt(myPetID)
				};
				return creatPet;
			},
			updateUserInfo: () => {
				let myName = document.querySelector("#name").value;
				let myLast_name = document.querySelector("#last_name").value;
				let myEmail = document.querySelector("#email").value;
				let myPhone = document.querySelector("#phone").value;
				let mylocation = document.querySelector("#location").value;
				let mybiografy = document.querySelector("#biografy").value;
				let myImg = document.querySelector("#img").value;
				let updatedUser = {
					name: myName,
					image: myImg,
					last_name: myLast_name,
					email: myEmail,
					phone: myPhone,
					location: mylocation,
					biografy: mybiografy
				};
				return updatedUser;
			},
			deletUserPet: petToDeleteData => {
				fetch(getStore().route + "/user/pet/" + petToDeleteData, {
					method: "DELETE",
					headers: {
						"Content-Type": "application/json",
						Accept: "application/json"
					}
				})
					.then(response => response.json())
					.then(answerUpload => {
						getActions().getLogedUserPets();
						getActions().getLogedUserPets();
					});
			},
			setPickedIndex: id => {
				setStore((getStore().indexChoosed = id));
			},
			setLoged: id => {
				localStorage.getItem("logedUser");
				setStore((getStore().logedUser = localStorage.getItem("logedUser")));
			},
			getLogedUser: () => {
				fetch(getStore().route + "/user/" + getActions().logedStore(), {
					method: "GET"
				})
					.then(response => {
						if (!response.ok) {
							throw Error(response.status);
						}
						return response.json();
					})
					.then(responseAsJson => {
						var userData = responseAsJson;
						setStore({ users: [...getStore().users, userData].flat() });
					})
					.catch(error => {
						console.log("Error status: ", error);
					});
			},
			readOtherprofile: param => {
				fetch(getStore().route + "/user/" + param, {
					method: "GET"
				})
					.then(response => {
						if (!response.ok) {
							throw Error(response.status);
						}
						return response.json();
					})
					.then(responseAsJson => {
						var userData = responseAsJson;
						setStore({ profiles: [...getStore().profiles, userData].flat() });
						// setStore({ profiles: [...getStore().profiles, userData].flat() });
						getActions().getOtherUserPets(param);
						getActions().getOtherUserServices(param);
					})
					.catch(error => {
						console.log("Error status: ", error);
					});
			},
			deleteAcount: () => {
				fetch(getStore().route + "/user/" + getStore().logedUser, {
					method: "DELETE"
				})
					.then(response => {
						if (!response.ok) {
							throw Error(response.status);
						}
						return response.json();
					})
					.then(responseAsJson => {
						getActions().logOut();
						window.location.replace("/");
					})
					.catch(error => {
						console.log("Error status: ", error);
					});
			},
			getOtherUserPets: param => {
				fetch(getStore().route + "/user/" + param + "/pet", {
					method: "GET"
				})
					.then(response => response.json())
					.then(answerDownload => {
						let pets = answerDownload;
						setStore({ othersPets: pets });
					});
			},
			getWhoHireYouHistory: () => {
				fetch(getStore().route + "/user/workedfor/1", {
					method: "GET"
				})
					.then(response => {
						if (!response.ok) {
							throw Error(response.status);
						}
						return response.json();
					})
					.then(responseAsJson => {
						var operationData = responseAsJson;
						setStore({ yove_worked_history: operationData });
					})
					.catch(error => {
						console.log("Error status: ", error);
					});
			},
			getYourHireHistory: () => {
				fetch(getStore().route + "/user/hired/1", {
					method: "GET"
				})
					.then(response => {
						if (!response.ok) {
							throw Error(response.status);
						}
						return response.json();
					})
					.then(responseAsJson => {
						var operationData = responseAsJson;
						setStore({ hired_history: operationData });
					})
					.catch(error => {
						console.log("Error status: ", error);
					});
			},
			logedStore: () => {
				if (getStore().logedUser == null) {
					return localStorage.getItem("logedUser");
				} else {
					return getStore().logedUser;
				}
			},
			updateUser: () => {
				fetch(getStore().route + "/user/" + getActions().logedStore(), {
					method: "PUT",
					body: JSON.stringify(getActions().updateUserInfo()),
					headers: {
						"Content-Type": "application/json"
					}
				})
					.then(response => response.json())
					.then(answerUpload => {
						getActions().getLogedUser();
					});
			},
			MyLoginInputReciver: () => {
				let myEmail = document.querySelector("#email").value;
				let myPassword = document.querySelector("#password").value;
				let logedUser = {
					email: myEmail,
					password: myPassword
				};
				return logedUser;
			},
			MyRegisterInputReciver: () => {
				let myFullName = document.querySelector("#name").value;
				let myEmail = document.querySelector("#email").value;
				let myLast_name = document.querySelector("#last_name").value;
				let myPassword = document.querySelector("#password").value;
				let myRepeatPassword = document.querySelector("#repeatPassword").value;
				if (myPassword == myRepeatPassword) {
					let newUser = {
						name: myFullName,
						email: myEmail,
						last_name: myLast_name,
						password: myPassword
					};
					getActions().showComponent();
					return newUser;
				} else {
					setStore((getStore().warning = true));
				}
			},
			showComponent: () => {
				if (getStore().show == false) {
					setStore((getStore().show = true));
				} else {
					setStore((getStore().show = false));
					setStore((getStore().warning = false));
				}
			},
			setShowLogin: () => {
				getStore().showLogin
					? setStore((getStore().showLogin = false))
					: setStore((getStore().showLogin = true));
			},
			setShowDeleteModal: () => {
				getStore().showDeleteModal
					? setStore((getStore().showDeleteModal = false))
					: setStore((getStore().showDeleteModal = true));
			},
			deleteService: id_service_type => {
				if (id_service_type == "Paseador") id_service_type = 1;
				if (id_service_type == "Cuidador") id_service_type = 2;
				if (id_service_type == "Hotel") id_service_type = 3;
				if (id_service_type == "Adiestrador") id_service_type = 4;
				if (id_service_type == "Veterinario") id_service_type = 5;

				fetch(getStore().route + "/user/" + getActions().logedStore() + "/dservices/" + id_service_type, {
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
				fetch(getStore().route + "/user/" + getActions().logedStore() + "/service", {
					method: "POST",
					body: JSON.stringify(serviceData),
					headers: {
						"Content-Type": "application/json"
					}
				})
					.then(response => response.json())
					.then(answerUpload => {
						setStore({ services: [...getStore().services, serviceData] });
						window.location.reload();
					});
			},
			updateUserService: serviceData => {
				fetch(getStore().route + "/user/" + getActions().logedStore() + "/service", {
					method: "PUT",
					body: JSON.stringify(serviceData),
					headers: {
						"Content-Type": "application/json"
					}
				})
					.then(response => response.json())
					.then(answerUpload => {
						getActions().getUserServices();
						window.location.reload();
					});
			},
			getUserServices: () => {
				fetch(getStore().route + "/user/" + getActions().logedStore() + "/service", {
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
			getOtherUserServices: userID => {
				fetch(getStore().route + "/user/" + userID + "/service", {
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
							setStore({ otherUserServices: serviceData });
						}
					})
					.catch(error => {
						console.log("Error status: ", error);
					});
			},
			getTypeServices: id_service_type => {
				console.log(id_service_type, "id del servicio");
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
				console.log(id_service_type, "id del servicio");
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
					.then(() => getActions().MatrixDistance(id_service_type))
					.catch(error => {
						console.log("Error status: ", error);
					});
			},
			showComponentService: () => {
				if (getStore().showService == false) {
					setStore((getStore().showService = true));
				} else {
					setStore((getStore().showService = false));
					setStore((getStore().warning = false));
				}
			},
			showUpdateService: () => {
				if (getStore().showUpdate == false) {
					setStore((getStore().showUpdate = true));
				} else {
					setStore((getStore().showUpdate = false));
					setStore((getStore().warning = false));
				}
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
					description: descripcion,
					is_active: true
				};
				return newService;
			},
			MatrixDistance: service_type_id => {
				fetch(getStore().route + "/user/" + getActions().logedStore() + "/distance/" + service_type_id, {
					method: "GET"
				})
					.then(response => {
						if (!response.ok) {
							throw Error(response.status);
						}
						return response.json();
					})
					.then(responseAsJson => {
						var distancesServices = responseAsJson;
						setStore({ distances: distancesServices });
					})
					.catch(error => {
						console.log("Error status: ", error);
					});
			},
			PaypalPayment: order => {
				fetch(getStore().route + "/paymant/paypal/", {
					method: "POST",
					body: JSON.stringify(order),
					headers: {
						"Content-Type": "application/json"
					}
				})
					.then(response => response.json())
					.then(answerUpload => {
						console.log(answerUpload);
					});
			},
			SearchDistance: id_user_offer => {
				var distance = "";
				getStore().distances.map(service => {
					if (service.id_user_offer == id_user_offer) distance = service.distance;
				});
				return distance;
			}
		}
	};
};

export default getState;
