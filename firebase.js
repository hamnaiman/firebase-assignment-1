import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
import {
    getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword ,onAuthStateChanged, sendEmailVerification,signOut} from "https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js"

//   import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-analytics.js";

const firebaseConfig = {
    apiKey: "AIzaSyBtdOOGyk92j3xbghLkWnf_wXcKbo-zeMA",
    authDomain: "authentication-form-22b15.firebaseapp.com",
    projectId: "authentication-form-22b15",
    storageBucket: "authentication-form-22b15.firebasestorage.app",
    messagingSenderId: "883603325530",
    appId: "1:883603325530:web:de0cb0e7dd3ad0cd8c8e63",
    measurementId: "G-DQBZW82CYY"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export {auth ,createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, sendEmailVerification,signOut}