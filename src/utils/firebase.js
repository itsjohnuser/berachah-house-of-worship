// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBGq7SCK6gpXr-Up80D5IBx0CoxYVs_9VM",
  authDomain: "berachahhouseofworship-kota.firebaseapp.com",
  projectId: "berachahhouseofworship-kota",
  storageBucket: "berachahhouseofworship-kota.appspot.com",
  messagingSenderId: "104339854004",
  appId: "1:104339854004:web:7103a3fdccfd31978dfde1",
  measurementId: "G-YG99JJ887Y",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
