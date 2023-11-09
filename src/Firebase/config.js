import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const API_KEY = process.env.REACT_APP_API_KEY_FB;
console.log("FB Key", API_KEY);

const firebaseConfig = {
  apiKey: API_KEY,
  authDomain: "maps-6d33a.firebaseapp.com",
  projectId: "maps-6d33a",
  storageBucket: "maps-6d33a.appspot.com",
  messagingSenderId: "919784177980",
  appId: "1:919784177980:web:facdacc3bf45d7974dde39",
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
