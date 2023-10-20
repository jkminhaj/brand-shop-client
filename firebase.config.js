// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCvWYSruHtiR75Yn4pl8oiElv6YcpkHTnw",
  authDomain: "tech-land-c2d63.firebaseapp.com",
  projectId: "tech-land-c2d63",
  storageBucket: "tech-land-c2d63.appspot.com",
  messagingSenderId: "460545144093",
  appId: "1:460545144093:web:bcd64c6ec536fafd35ddf4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);