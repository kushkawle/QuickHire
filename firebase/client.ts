
import {  getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCMWKrmGD6NMsoy6nb8Ifke98mSuIis8Oo",
  authDomain: "prepwise-91fdd.firebaseapp.com",
  projectId: "prepwise-91fdd",
  storageBucket: "prepwise-91fdd.firebasestorage.app",
  messagingSenderId: "684393486940",
  appId: "1:684393486940:web:3c6b4582072fcebcf96499",
  measurementId: "G-BNLD3MNN8K"
};


const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth =getAuth(app);
export const db = getFirestore(app)