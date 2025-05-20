// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCaDQvmQLB7eFobZW-K_zaeoNosvg8X1Qc",
  authDomain: "material-ui-project-19a2d.firebaseapp.com",
  projectId: "material-ui-project-19a2d",
  storageBucket: "material-ui-project-19a2d.firebasestorage.app",
  messagingSenderId: "1037777075678",
  appId: "1:1037777075678:web:cc145e84293192de8b714f",
  measurementId: "G-XF2L1Z29RP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);