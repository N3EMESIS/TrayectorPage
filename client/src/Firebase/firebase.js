import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDAe7cxlyDmynFohFTtLH5GdW5RTXXC55w",
  authDomain: "trayectorpage.firebaseapp.com",
  projectId: "trayectorpage",
  storageBucket: "trayectorpage.appspot.com",
  messagingSenderId: "813553151547",
  appId: "1:813553151547:web:381a080b9a94f2b781f61e",
  measurementId: "G-9WTXEBQ7FX"
};
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export const googleProvider = new GoogleAuthProvider();