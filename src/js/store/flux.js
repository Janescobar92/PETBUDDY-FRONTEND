const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			user_id: 1,
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
					sterilized: null
				}
			],
			result: false
		},
		actions: {
			// Use getActions to call a function within a fuction
			handleClick: () => {
				if (getStore().result == false) {
					setStore((getStore().result = true));
				} else {
					setStore((getStore().result = false));
				}
				console.log(getStore().result, " HOLA ESTOY AQUI");
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
				let myPetImg = document.querySelector("#img").value;
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
				console.log(newPet);
				return newPet;
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
