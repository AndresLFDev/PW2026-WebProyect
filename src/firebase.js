import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDXmX6Cj2q-sKrsCtHGMSeMhOyGJDwWjJ0",
  authDomain: "biosalud-333e3.firebaseapp.com",
  projectId: "biosalud-333e3",
  storageBucket: "biosalud-333e3.firebasestorage.app",
  messagingSenderId: "487294714043",
  appId: "1:487294714043:web:ded0d0bd3b58da0ed5299e"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
