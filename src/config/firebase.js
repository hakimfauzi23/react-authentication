// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyANU-n9RCvKFNNL-0LAFx-aK8T-owRPqjo",
  authDomain: "mood-meter-63a2a.firebaseapp.com",
  projectId: "mood-meter-63a2a",
  storageBucket: "mood-meter-63a2a.appspot.com",
  messagingSenderId: "787084605874",
  appId: "1:787084605874:web:e9cc45b5f6831f3b3fccab",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export { auth };
