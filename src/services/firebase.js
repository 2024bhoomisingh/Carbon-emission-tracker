import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCTd_vLcV8gjJypHNI5BqGhTaYeV5Gseyg",
  authDomain: "carbonlens-886c2.firebaseapp.com",
  projectId: "carbonlens-886c2",
  storageBucket: "carbonlens-886c2.firebasestorage.app",
  messagingSenderId: "596490131780",
  appId: "1:596490131780:web:60f21872295dd77ac85f11",
  measurementId: "G-C0GVKXK2KC"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
