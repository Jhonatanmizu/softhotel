// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD96SKucfFKCFvpukic98b4Ju3LRby22zc",
  authDomain: "softhotel-5b2a7.firebaseapp.com",
  projectId: "softhotel-5b2a7",
  storageBucket: "softhotel-5b2a7.appspot.com",
  messagingSenderId: "362705064382",
  appId: "1:362705064382:web:b97ba0fcb9c661437829ef",
  measurementId: "G-VM6KNQQNMJ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export { app, analytics, db };
