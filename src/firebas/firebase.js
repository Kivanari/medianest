// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";  // Импортируем getAuth для аутентификации
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
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

// Получаем объект аутентификации
const auth = getAuth(app);

// Инициализация аналитики (не обязательно для аутентификации)
const analytics = getAnalytics(app);

// Экспортируем auth для использования в других компонентах
export { auth };




