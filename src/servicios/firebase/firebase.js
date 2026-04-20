import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

/*const firebaseConfig = {
  apiKey: "AIzaSyCIfibl2aiS-SVUPLOvrrkb2rpaIdJXMro",
  authDomain: "ecommerce-39ebd.firebaseapp.com",
  projectId: "ecommerce-39ebd",
  storageBucket: "ecommerce-39ebd.firebasestorage.app",
  messagingSenderId: "803742414190",
  appId: "1:803742414190:web:2c8f58a3f0a7118ddcfd7f",
};*/

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore (app)