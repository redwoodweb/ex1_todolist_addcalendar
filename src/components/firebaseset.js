import firebase from "firebase/app";
import "firebase/firestore";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://support.google.com/firebase/answer/7015592
const firebaseConfig = {
    apiKey: "AIzaSyAeOeTOoAuDada8qjYmQ6RgUns7eueFbKI",
    authDomain: "todolist-addcalendar.firebaseapp.com",
    projectId: "todolist-addcalendar",
    storageBucket: "todolist-addcalendar.appspot.com",
    messagingSenderId: "284725172486",
    appId: "1:284725172486:web:b0752a36f89142fcd2a687",
    measurementId: "G-Q7QZMFCXSE"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


// Initialize Cloud Firestore and get a reference to the service
export const db = firebase.firestore();