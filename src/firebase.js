// src/firebase.js

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";        // 🔐 login
import { getFirestore } from "firebase/firestore"; // 📦 database
import { getStorage } from "firebase/storage";  // 📸 images

const firebaseConfig = {
  apiKey: "AIzaSyA-xpPie0hKsXn0_rqHgNx-COt4TCnSAEY",
  authDomain: "peer-1caa6.firebaseapp.com",
  projectId: "peer-1caa6",
  storageBucket: "peer-1caa6.firebasestorage.app",
  messagingSenderId: "74918168094",
  appId: "1:74918168094:web:c98ea08d962e67049f100f",
  measurementId: "G-JFYPTK0PT5"
};

// 🔥 Initialize Firebase
const app = initializeApp(firebaseConfig);

// ✅ EXPORT THESE (VERY IMPORTANT)
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);