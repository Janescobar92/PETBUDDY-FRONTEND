import { Link } from "react-router-dom";

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
			yove_worked_history: [],
			show: false,
			showLogin: false,
			Warnings: false
		},
		actions: {
			registerUser: params => {
				fetch("https://3000-c948bd0b-ac9d-4c50-a69e-4fc330593eb4.ws-eu01.gitpod.io/register", {
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
				fetch("https://3000-c948bd0b-ac9d-4c50-a69e-4fc330593eb4.ws-eu01.gitpod.io/login", {
					method: "POST",
					body: JSON.stringify(loginData),
					headers: {
						"Content-Type": "application/json"
					}
				})
					.then(response => response.json())
					.then(answerDownload => {
						localStorage.setItem("x-access-token", answerDownload.token);
						window.location.replace("/home");
						console.log("Success: ", 200);
					});
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
			createUser: userData => {
				// fetch("https://assets.breatheco.de/apis/fake/contact/", {
				// 	method: "POST",
				// 	body: JSON.stringify(param),
				// 	headers: {
				// 		"Content-Type": "application/json"
				// 	}
				// })
				// .then(response => response.json())
				// .then(answerUpload => {
				// 	getActions().getContacts();
				// 	console.log("Success: ", JSON.stringify(answerUpload));
				// });
				setStore({ user: [...getStore().user, userData] });
			},
			// Use getActions to call a function within a fuction
			getWhoHireYouHistory: () => {
				// use fetch here
				let data = [
					{
						id: 1,
						name: "Juan Carlos",
						last_name: "Alcalde",
						phone: "605143832",
						image:
							"https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
						price: 20,
						date: "18 de noviembre",
						service_type: "paseador"
					},
					{
						id: 2,
						name: "María",
						last_name: "Theodor",
						phone: "605143832",
						image:
							"https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
						price: 15,
						date: "20 de enero ",
						service_type: "canguro"
					}
				];
				setStore({ yove_worked_history: [...getStore().yove_worked_history, data].flat() });
			},
			MyLoginInputReciver: () => {
				let myEmail = document.querySelector("#email").value;
				let myPassword = document.querySelector("#password").value;
				let logedUser = {
					email: myEmail,
					password: myPassword
				};
				// getActions().setShowLogin();
				console.log(logedUser);
				return logedUser;
				// setStore((getStore().warning = true));
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
					console.log(newUser);
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
				if (getStore().showLogin == false) {
					setStore((getStore().showLogin = true));
				} else {
					setStore((getStore().showLogin = false));
					// setStore((getStore().warning = false));
				}
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
