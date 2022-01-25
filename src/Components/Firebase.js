// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBGgVGzU3MnFqWeKDp-yqlkzwNhycLo8A0",
    authDomain: "harlem-outfitters.firebaseapp.com",
    projectId: "harlem-outfitters",
    storageBucket: "harlem-outfitters.appspot.com",
    messagingSenderId: "139906672578",
    appId: "1:139906672578:web:385db8d04c6c6baf67d85b"
};

// Initialize Firebase
initializeApp(firebaseConfig);

export default getFirestore();