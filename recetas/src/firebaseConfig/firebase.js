// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "@firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBZEGS5K38hILaRKY8t_JMVuL_5mmQLB80",
  authDomain: "crud-cac-tpintegrador.firebaseapp.com",
  projectId: "crud-cac-tpintegrador",
  storageBucket: "crud-cac-tpintegrador.appspot.com",
  messagingSenderId: "218299972993",
  appId: "1:218299972993:web:af82bb6ffd9ee59f4ffc80",
  measurementId: "G-B8S6M0VF6J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);