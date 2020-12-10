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
			show: false,
			showService: false,
			showLogin: false,
			showDeleteModal: false,
			Warnings: false,
			logedUser: null,
			indexChoosed: null,
			registeredUsers: true,
			route: "https://33060-a1396043-370d-4c3c-a10d-725a928b2d9a.ws-eu03.gitpod.io"
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
						console.log("Success: ", JSON.stringify(answerUpload));
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
						console.log(answerDownload);
						var token = answerDownload.token;
						localStorage.setItem("x-access-token", token);
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
						console.log("Success: ", JSON.stringify(answerDownload));
						setStore({ animals: pets });
					});
			},
			getInputValuesAnimalType: () => {
				fetch(getStore().route + "/animals_type", {
					method: "GET"
				})
					.then(response => response.json())
					.then(answerDownload => {
						console.log("Success: ", JSON.stringify(answerDownload));
						setStore({ animal_type: [answerDownload].flat() });
					});
			},
			getInputValuesPetCharacters: () => {
				fetch(getStore().route + "/pets_character", {
					method: "GET"
				})
					.then(response => response.json())
					.then(answerDownload => {
						console.log("Success: ", JSON.stringify(answerDownload));
						setStore({ pets_character: [answerDownload].flat() });
					});
			},
			createUserPet: petData => {
				fetch(getStore().route + "/user/" + getActions().logedStore() + "/pet", {
					method: "POST",
					body: JSON.stringify(petData),
					headers: {
						"Content-Type": "application/json"
					}
				})
					.then(response => response.json())
					.then(answerUpload => {
						console.log("Success: ", JSON.stringify(answerUpload));
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
						console.log("Success: ", JSON.stringify(answerUpload));
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
				fetch(getStore().route + "/user/" + getActions().logedStore() + "/" + petToDeleteData, {
					method: "DELETE"
				})
					.then(response => {
						if (!response.ok) {
							throw new Error(response.status);
						}
						return response.json();
					})
					.then(answerUpload => {
						getActions().getLogedUserPets();
						console.log("Success: pet deleted");
					})
					.catch(error => {
						console.log("Deleting pet, error status: ", error);
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
						getActions().getOtherUserPets(param);
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
						console.log(responseAsJson);
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
						console.log("Success: ", JSON.stringify(answerDownload));
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
						console.log(responseAsJson);
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
						console.log(responseAsJson);
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
						console.log("Success: ", JSON.stringify(answerUpload));
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

				fetch(getStore().route + "/user/" + getActions().logedStore() + "/" + id_service_type, {
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
					fetch(getStore().route + "/user/" + getActions().logedStore() + "/service", {
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
				fetch(getStore().route + "/user/" + getActions().logedStore() + "/service", {
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
				fetch(getStore().route + "/user/" + getActions().logedStore() + "/service_disabled", {
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
			showComponentService: () => {
				if (getStore().showService == false) {
					setStore((getStore().showService = true));
				} else {
					setStore((getStore().showService = false));
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
					description: descripcion
				};
				return newService;
			},
			MatrixDistance: () => {
				fetch(
					"https://3000-c948bd0b-ac9d-4c50-a69e-4fc330593eb4.ws-eu03.gitpod.io/user/" +
						getActions().logedStore() +
						"/distance/1",
					{
						method: "GET"
					}
				)
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
			}
		}
	};
};

export default getState;
