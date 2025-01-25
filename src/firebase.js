// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCrVNrLsB3h1eEq4kgTd76ycB4uoLXTts0",
  authDomain: "ota-platform-1877c.firebaseapp.com",
  projectId: "ota-platform-1877c",
  storageBucket: "ota-platform-1877c.firebasestorage.app",
  messagingSenderId: "570564374016",
  appId: "1:570564374016:web:d9aa77c1829d804b23f2e5",
  measurementId: "G-DBTB545EM6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);