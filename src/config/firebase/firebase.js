// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAAOWptMYRNVt33ifjoRX_AUjivrf1Dz4Y",
  authDomain: "shopify-ads-b2a23.firebaseapp.com",
  projectId: "shopify-ads-b2a23",
  storageBucket: "shopify-ads-b2a23.firebasestorage.app",
  messagingSenderId: "367855586297",
  appId: "1:367855586297:web:6d874f0a99730a2b064b28",
  measurementId: "G-4GL9HJZEPP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)



export { app, auth };