// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "@firebase/firestore"
import {getStorage} from "firebase/storage"
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
/*const firebaseConfig = {
  apiKey: "AIzaSyBZEGS5K38hILaRKY8t_JMVuL_5mmQLB80",
  authDomain: "crud-cac-tpintegrador.firebaseapp.com",
  projectId: "crud-cac-tpintegrador",
  storageBucket: "crud-cac-tpintegrador.appspot.com",
  messagingSenderId: "218299972993",
  appId: "1:218299972993:web:af82bb6ffd9ee59f4ffc80",
  measurementId: "G-B8S6M0VF6J"
};*/
const firebaseConfig = {
  apiKey: "AIzaSyDzY2EbSRhFvLRMWP1K1Fl-nDZhJPJ7jlk",
  authDomain: "recetas-project.firebaseapp.com",
  projectId: "recetas-project",
  storageBucket: "recetas-project.appspot.com",
  messagingSenderId: "510486745064",
  appId: "1:510486745064:web:68105631c520f9702dde5d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage();
export const db = getFirestore(app);
export const auth = getAuth();