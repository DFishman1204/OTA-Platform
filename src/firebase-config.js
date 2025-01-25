// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"; // Add this line for authentication

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCrVNrLsB3h1eEq4kgTd76ycB4uoLXTts0",
  authDomain: "ota-platform-1877c.firebaseapp.com",
  projectId: "ota-platform-1877c",
  storageBucket: "ota-platform-1877c.appspot.com",
  messagingSenderId: "570564374016",
  appId: "1:570564374016:web:d9aa77c1829d804b23f2e5",
  measurementId: "G-DBTB545EM6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app); // Initialize Firebase Authentication
// Import Firebase Authentication functions
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase-config.js"; // Import the auth object from firebase-config.js

// Function to sign up a new user
function signUp(email, password) {
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed up successfully
            const user = userCredential.user;
            console.log("User signed up:", user);
            alert("Sign-up successful!");
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error("Error signing up:", errorMessage);
            alert("Error: " + errorMessage);
        });
}

// Function to sign in an existing user
function signIn(email, password) {
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in successfully
            const user = userCredential.user;
            console.log("User signed in:", user);
            alert("Sign-in successful!");
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error("Error signing in:", errorMessage);
            alert("Error: " + errorMessage);
        });
}

// Link these functions to your HTML buttons (see next step)
