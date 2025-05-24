// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDe4qMkqCr-rbATEsaQ79BMMwYr8A8Se5o",
  authDomain: "snack-lista-de-tarefas.firebaseapp.com",
  databaseURL: "https://snack-lista-de-tarefas-default-rtdb.firebaseio.com",
  projectId: "snack-lista-de-tarefas",
  storageBucket: "snack-lista-de-tarefas.firebasestorage.app",
  messagingSenderId: "387155635270",
  appId: "1:387155635270:web:e0530eebe97ebdc613ae47",
  measurementId: "G-4MLYN1WPRD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {db};