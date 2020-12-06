import { Link } from "react-router-dom";
import jwt_decode from "jwt-decode";
const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			users: [],
			animals: [],
			animal_type: [],
			pets_character: [],
			yove_worked_history: [],
			show: false,
			showLogin: false,
			Warnings: false,
			logedUser: null,
			indexChoosed: null,
			user_services: [],
			services: [],
			yove_worked_history: [],
			hired_history: [],
			route: " https://3000-c948bd0b-ac9d-4c50-a69e-4fc330593eb4.ws-eu03.gitpod.io"
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
					.then(response => response.json())
					.then(answerDownload => {
						var token = answerDownload.token;
						localStorage.setItem("x-access-token", token);
						window.location.replace("/home/" + getStore().logedUser);
						console.log("Success: ", 200);
					});
			},
			logOut: () => {
				localStorage.removeItem("x-access-token");
				setStore((getStore().logedUser = null));
			},
			getLocalSorageToken: () => {
				var token = localStorage.getItem("x-access-token");
				const decoded = jwt_decode(token);
				getActions().setLoged(decoded.id);
			},
			getLogedUserPets: () => {
				fetch(getStore().route + "/user/" + getStore().logedUser + "/pet", {
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
				fetch(getStore().route + "/user/" + getStore().logedUser + "/pet", {
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
					user_id: getStore().logedUser,
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
				fetch(getStore().route + "/user/" + getStore().logedUser + "/pet", {
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
					user_id: getStore().logedUser,
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
			deletUserPet: petToDeleteData => {
				fetch(getStore().route + "/user/" + getStore().logedUser + "/" + petToDeleteData, {
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
				setStore((getStore().logedUser = id));
			},
			getLogedUser: () => {
				fetch(getStore().route + "/user/" + getStore().logedUser, {
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
			}
		}
	};
};

export default getState;
