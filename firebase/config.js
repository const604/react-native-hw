// Для роботи із firebase обовʼязково треба ініціалізувати проект
import { initializeApp } from "firebase/app";
// Функція для підключення авторизації в проект
import { getAuth } from "firebase/auth";
// Функція для підключення бази даних у проект
import { getFirestore } from "firebase/firestore";
// Функція для підключення сховища файлів в проект
import { getStorage } from "firebase/storage";

// const API_KEY = import.meta.env.VITE_API_KEY;

const firebaseConfig = {
  apiKey: "AIzaSyAdyRKkZ31wOfmOxDd4ME4ECV2xIL37BB0",
  authDomain: "photoapp-9518f.firebaseapp.com",
  projectId: "photoapp-9518f",
  storageBucket: "photoapp-9518f.appspot.com",
  messagingSenderId: "413675402871",
  appId: "1:413675402871:web:071edb946e9f9be6453872",
  measurementId: "G-L1K8BJZ651",
};


const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
