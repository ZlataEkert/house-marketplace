import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDK-DPFdAsnnKnd3g5P38lWUyhEH6fmp6U",
  authDomain: "house-marketplace-app-c23e7.firebaseapp.com",
  projectId: "house-marketplace-app-c23e7",
  storageBucket: "house-marketplace-app-c23e7.appspot.com",
  messagingSenderId: "1090724374423",
  appId: "1:1090724374423:web:ba4a11d454c4fbcc2e06d2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore();
