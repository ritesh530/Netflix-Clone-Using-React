// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBbLun44Uacq1aEaMY6ivpuxVVpMtN432w",
  authDomain: "netfilx-clone-4e2ff.firebaseapp.com",
  projectId: "netfilx-clone-4e2ff",
  storageBucket: "netfilx-clone-4e2ff.appspot.com",
  messagingSenderId: "37340381089",
  appId: "1:37340381089:web:711499bc5403c9ac9455e0",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
