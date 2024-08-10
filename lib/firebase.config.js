
import { initializeApp,getApp,getApps } from "firebase/app";
import {getFirestore} from "firebase/firestore";



// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "cartrip-c0ec2.firebaseapp.com",
  projectId: "cartrip-c0ec2",
  storageBucket: "cartrip-c0ec2.appspot.com",
  messagingSenderId: "1099357599389",
  appId: "1:1099357599389:web:197a22118bc3183cce0674"
};

// Initialize Firebase
const app = !getApps().lenght ? initializeApp(firebaseConfig) : getApp();
const db = getFiresore(app);

export { db }