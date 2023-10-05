import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyBCYG26HqGC4pauHh8UBPxY7b47M8He7O0",
	authDomain: "mini-project-auth-2a307.firebaseapp.com",
	projectId: "mini-project-auth-2a307",
	storageBucket: "mini-project-auth-2a307.appspot.com",
	messagingSenderId: "394023318079",
	appId: "1:394023318079:web:89b330c4be0fddeecb3e8a",
	measurementId: "G-YEHTFYYK68",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
