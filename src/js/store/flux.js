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
			]
		},
		actions: {
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
