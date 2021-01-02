import firebase from "firebase/app";
import "firebase/storage";

const firebaseConfig = {
	apiKey: "AIzaSyBPIzwf73Fr23lP4IObQpJ7jthK5Q-TL_c",
	authDomain: "petbuddyfirebase.firebaseapp.com",
	projectId: "petbuddyfirebase",
	storageBucket: "petbuddyfirebase.appspot.com",
	messagingSenderId: "973598483368",
	appId: "1:973598483368:web:52610d37f457c7d2ccf39d",
	measurementId: "G-WJQY8P8PGW"
};

firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

export { storage, firebase as default };
