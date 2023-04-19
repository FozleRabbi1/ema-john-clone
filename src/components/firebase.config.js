// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDb9VgNeosi21YzPod8o1jcxDFXyBg2o6k",
  authDomain: "ema-joha-clone.firebaseapp.com",
  projectId: "ema-joha-clone",
  storageBucket: "ema-joha-clone.appspot.com",
  messagingSenderId: "927771668394",
  appId: "1:927771668394:web:c77e09dc60a36db2d845d3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;