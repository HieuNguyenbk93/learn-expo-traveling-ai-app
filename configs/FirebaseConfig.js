// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBrnEpHsROcgp9F2OdvIdI5kWsO7f8Lj_I",
  authDomain: "rn-nbh.firebaseapp.com",
  projectId: "rn-nbh",
  storageBucket: "rn-nbh.appspot.com",
  messagingSenderId: "526579563944",
  appId: "1:526579563944:web:ff8a89ce4af8e73d5b319d",
  measurementId: "G-HJ0GCL7GZ5"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app);