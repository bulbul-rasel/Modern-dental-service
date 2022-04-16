// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAGP-FUo5NiCKHHEO41E9jyzkWR5VLRF7Q",
    authDomain: "dental-service-fa5d0.firebaseapp.com",
    projectId: "dental-service-fa5d0",
    storageBucket: "dental-service-fa5d0.appspot.com",
    messagingSenderId: "959927274950",
    appId: "1:959927274950:web:752d12d99b5729416236c7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;