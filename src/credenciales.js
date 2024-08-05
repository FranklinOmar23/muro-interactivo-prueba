// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCWuMigWiBrD_dw_Cuk9dV2r9x9M7kTrr4",
  authDomain: "muro-interactivo-14b3a.firebaseapp.com",
  projectId: "muro-interactivo-14b3a",
  storageBucket: "muro-interactivo-14b3a.appspot.com",
  messagingSenderId: "182779170842",
  appId: "1:182779170842:web:6f2844657795319fe641a3"
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);
export default appFirebase;