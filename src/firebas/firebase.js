// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBByppdYwj4DKybkWUNj1KQNKmqbYUSe6Q",
  authDomain: "holykino-3eae6.firebaseapp.com",
  databaseURL: "https://holykino-3eae6-default-rtdb.firebaseio.com",
  projectId: "holykino-3eae6",
  storageBucket: "holykino-3eae6.firebasestorage.app",
  messagingSenderId: "317364937952",
  appId: "1:317364937952:web:95e7c3bf0086b75726dc85",
  measurementId: "G-XELQ8QVV4X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);



