// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {GoogleAuthProvider, getAuth} from "firebase/auth"
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCVGAE3Bb-oDGKEu5xnmrh4lUIBzm8Auqg",
  authDomain: "pomodrotimer-5f472.firebaseapp.com",
  projectId: "pomodrotimer-5f472",
  storageBucket: "pomodrotimer-5f472.appspot.com",
  messagingSenderId: "702370235919",
  appId: "1:702370235919:web:ef25201e083116c57f857a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const Auth=getAuth(app);
export const db=getFirestore(app)
export const provider=new GoogleAuthProvider();