// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAbSFet2-lewy_WXBwRcD5Tfgph0A9Z6iY",
  authDomain: "pickobook-media.firebaseapp.com",
  projectId: "pickobook-media",
  storageBucket: "pickobook-media.appspot.com",
  messagingSenderId: "924753077280",
  appId: "1:924753077280:web:9a0d41631e448fd4d40845"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;