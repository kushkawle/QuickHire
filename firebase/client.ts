
import {  getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  // apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  // authDomain:process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  // projectId: process.env.FIREBASE_PROJECT_ID,
  // storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  // messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  // appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  // measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID

  apiKey: "AIzaSyCMWKrmGD6NMsoy6nb8Ifke98mSuIis8Oo",
  //apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "prepwise-91fdd.firebaseapp.com",
  //authDomain:process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: "prepwise-91fdd",
  //projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: "prepwise-91fdd.firebasestorage.app",
  //storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: "684393486940",
  //messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: "1:684393486940:web:3c6b4582072fcebcf96499",
  //appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: "G-BNLD3MNN8K"
  //measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID
};


const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth =getAuth(app);
export const db = getFirestore(app)
