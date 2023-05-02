import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCrIFWOG4hjCFWnmXzfUyToGXQas79qORA",
  authDomain: "web-dev-stuff-be481.firebaseapp.com",
  projectId: "web-dev-stuff-be481",
  storageBucket: "web-dev-stuff-be481.appspot.com",
  messagingSenderId: "725851518005",
  appId: "1:725851518005:web:5334c83dda65600f086d7c",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const storage = getStorage(app);
