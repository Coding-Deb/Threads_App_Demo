// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCXX1ttOo0GaxQ7hPQ9izgZDvixhJYRR6A",
  authDomain: "threads-app-c8bb4.firebaseapp.com",
  projectId: "threads-app-c8bb4",
  storageBucket: "threads-app-c8bb4.appspot.com",
  messagingSenderId: "651174509403",
  appId: "1:651174509403:web:80da623368ddba737eb87e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);
export {auth,db}
