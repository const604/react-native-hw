// Для роботи із firebase обовʼязково треба ініціалізувати проект
import AsyncStorage from "@react-native-async-storage/async-storage";
import { initializeApp } from "firebase/app";
// Функція для підключення авторизації в проект
import {
  getAuth,
  initializeAuth,
  getReactNativePersistence,
} from "firebase/auth";
// Функція для підключення бази даних у проект
import { getFirestore } from "firebase/firestore";
// Функція для підключення сховища файлів в проект
import { getStorage } from "firebase/storage";

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

export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});
export const db = getFirestore(app);
export const storage = getStorage(app);
