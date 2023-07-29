import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

  const firebaseConfig = {
    apiKey: "AIzaSyAvkgl8UPBnSHkI8LMqCN1QRJbrFZms2nM",
    authDomain: "mini-project-auth-2886b.firebaseapp.com",
    projectId: "mini-project-auth-2886b",
    storageBucket: "mini-project-auth-2886b.appspot.com",
    messagingSenderId: "1039421406280",
    appId: "1:1039421406280:web:c3f10f0bfd3b854f5dec7d",
    measurementId: "G-4TP8M99S69"
  };

 export const app = initializeApp(firebaseConfig);
 export const auth=getAuth();


