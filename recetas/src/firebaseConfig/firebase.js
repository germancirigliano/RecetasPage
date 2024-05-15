// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "@firebase/firestore"
import {getStorage} from "firebase/storage"
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  // apiKey: "AIzaSyBZEGS5K38hILaRKY8t_JMVuL_5mmQLB80",
  // authDomain: "crud-cac-tpintegrador.firebaseapp.com",
  // projectId: "crud-cac-tpintegrador",
  // storageBucket: "crud-cac-tpintegrador.appspot.com",
  // messagingSenderId: "218299972993",
  // appId: "1:218299972993:web:af82bb6ffd9ee59f4ffc80",
  // measurementId: "G-B8S6M0VF6J"

  apiKey: "AIzaSyAw0dz_ff-_dODmZ4l84b8L4iU-7IYSPho",
  authDomain: "recetas-ba8fe.firebaseapp.com",
  projectId: "recetas-ba8fe",
  storageBucket: "recetas-ba8fe.appspot.com",
  messagingSenderId: "541111018902",
  appId: "1:541111018902:web:f12ab7b150c5a0fe8669b7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage();
export const db = getFirestore(app);
export const auth = getAuth();