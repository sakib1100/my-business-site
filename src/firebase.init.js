
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
import {getAuth} from 'firebase/auth';
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA7no7V-wquv0ODYclm2yL4q_rMhkb4iEo",
  authDomain: "business-client-64ad0.firebaseapp.com",
  projectId: "business-client-64ad0",
  storageBucket: "business-client-64ad0.appspot.com",
  messagingSenderId: "353572379551",
  appId: "1:353572379551:web:3c218e610d895a780fbbaa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;

