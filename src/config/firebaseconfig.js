// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBZvB-KNzo-YC3pg9SyWwI7Lu3-nNzvduo",
  authDomain: "todoapp-with-auth-db-reactjs.firebaseapp.com",
  projectId: "todoapp-with-auth-db-reactjs",
  storageBucket: "todoapp-with-auth-db-reactjs.appspot.com",
  messagingSenderId: "788188221544",
  appId: "1:788188221544:web:b318c609ad385482cc2bdd",
  measurementId: "G-0ESQ2PCRK7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;
