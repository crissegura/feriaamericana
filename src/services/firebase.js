// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAQCQnN8kSb9-rFGx9K4LFt3Xhgiuk-XSw",
  authDomain: "feriaamericana-55805.firebaseapp.com",
  projectId: "feriaamericana-55805",
  storageBucket: "feriaamericana-55805.appspot.com",
  messagingSenderId: "356464382519",
  appId: "1:356464382519:web:fd30dfc0840c69c53965b2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export const storage = getStorage(app);
export default db;