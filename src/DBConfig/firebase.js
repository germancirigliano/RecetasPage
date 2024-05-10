// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from '@firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAIW9_jrJzonuv9JBzDQNOBqA9uJa75vz4",
  authDomain: "cac-crud-react-firebase.firebaseapp.com",
  projectId: "cac-crud-react-firebase",
  storageBucket: "cac-crud-react-firebase.appspot.com",
  messagingSenderId: "165114634839",
  appId: "1:165114634839:web:41916ba16e509588bb7912"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);