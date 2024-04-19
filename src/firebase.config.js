// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA7Yjioiw-wh45pdTSDpf5l0NBShbMRD1s",
  authDomain: "clever-airship-414716.firebaseapp.com",
  projectId: "clever-airship-414716",
  storageBucket: "clever-airship-414716.appspot.com",
  messagingSenderId: "1017602328090",
  appId: "1:1017602328090:web:5b29cbee72e2f7ca7eb3a3",
  measurementId: "G-50SLTLDGC9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 export  const auth = getAuth(app)
export const db = getFirestore(app)