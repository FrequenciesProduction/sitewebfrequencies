// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDy79sBpeyBFZ31uoc_qs9t_H5Su0DEFtA",
  authDomain: "frequencies-web.firebaseapp.com",
  databaseURL: "https://frequencies-web-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "frequencies-web",
  storageBucket: "frequencies-web.appspot.com",
  messagingSenderId: "308752516802",
  appId: "1:308752516802:web:e884e30856f8722e891d5b",
  measurementId: "G-46N3553BST"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
import { getStorage, ref, deleteObject } from 'firebase/storage';
const storage = getStorage(app);
const emissionsBaseUrl = "https://frequencies-web-default-rtdb.europe-west1.firebasedatabase.app/emissions.json";
const deleteEmissionUrl = "https://frequencies-web-default-rtdb.europe-west1.firebasedatabase.app/emissions/";
const storageBaseUrl = "gs://frequencies-web.appspot.com/";

export { storage, emissionsBaseUrl, deleteEmissionUrl, storageBaseUrl }