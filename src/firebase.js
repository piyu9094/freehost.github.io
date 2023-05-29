// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBon1rZWiICh4ykbrBorofaMzT8DQfoabY",
  authDomain: "maagroup-8819d.firebaseapp.com",
  projectId: "maagroup-8819d",
  storageBucket: "maagroup-8819d.appspot.com",
  messagingSenderId: "950248572237",
  appId: "1:950248572237:web:702e153da90bff8970a304",
  measurementId: "G-6GCZ87KWH0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);