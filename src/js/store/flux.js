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
			services: [
				{
					id: 1,
					service: "Cuidador",
					description:
						"Mi nombre es Juan Carlos, y estaria encantado de cuidar de tu perro siempre que pueda",
					price: 6.0,
					image:
						"https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
					schedule: "9:00-18:00"
				}
			],
			show: false
		},
		actions: {
			addService: serviceData => {
				//aqui va el POST
				setStore({ services: [...getStore().services, serviceData] });
			},
			showComponent: () => {
				if (getStore().show == false) {
					setStore((getStore().show = true));
				} else {
					setStore((getStore().show = false));
				}
			},
			createPet: petData => {
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
				setStore({ animals: [...getStore().animals, petData] });
			},
			MyPetsInputReciver: () => {
				let myPetName = document.querySelector("#name").value;
				let myPetType = document.querySelector("#type").value;
				let myPetAge = document.querySelector("#age").value;
				let myPetPersonality = document.querySelector("#personality").value;
				let myPetWeight = document.querySelector("#weight").value;
				let myPetSize = document.querySelector("#size").value;
				let myPetGender = document.querySelector("#gender").value;
				let myPetAffections = document.querySelector("#affections").value;
				let myPetSterilized = document.querySelector("#sterilized").value;
				let myPetImg = document.querySelector("#Img").value;
				let newPet = {
					user_id: getStore().user_id,
					name: myPetName,
					image: myPetImg,
					animal_type: myPetType,
					age: myPetAge,
					personality: myPetPersonality,
					gender: myPetGender,
					weight: myPetWeight,
					size: myPetSize,
					diseases: myPetAffections,
					sterilized: myPetSterilized
				};
				console.log(newPet, "THIS IS MY NEW PET");
				return newPet;
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
