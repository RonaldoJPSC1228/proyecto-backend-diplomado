// Importamos solo las funciones necesarias de Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  fetchSignInMethodsForEmail,
  signOut
} from "https://www.gstatic.com/firebasejs/9.22.2/firebase-auth.js";

import {
  getFirestore,
  doc,
  setDoc,
  getDoc,
  collection,
  query,
  where,
  getDocs,
  addDoc,
  deleteDoc,
  updateDoc,
  Timestamp,
} from "https://www.gstatic.com/firebasejs/9.22.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "YouR-Api-Key-Here",
  authDomain: "YouR-Auth-Domain-Here",
  projectId: "YouR-Project-ID-Here",
  storageBucket: "YouR-Storage-Bucket-Here",
  messagingSenderId: "YouR-Messaging-Sender-ID-Here",
  appId: "YouR-App-ID-Here",
  measurementId: "YouR-Measurement-ID-Here",
};

// Inicializamos Firebase
const app = initializeApp(firebaseConfig);

// Inicializamos la autenticación y Firestore
const auth = getAuth(app);
const db = getFirestore(app);

// Exportamos todo lo necesario
export {
  auth,
  db,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  fetchSignInMethodsForEmail,
  doc,
  setDoc,
  getDoc,
  collection,
  query,
  where,
  getDocs,
  addDoc,
  deleteDoc,
  updateDoc,
  Timestamp,
};