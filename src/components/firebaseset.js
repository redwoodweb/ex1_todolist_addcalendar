import firebase from "firebase/app";
import "firebase/firestore";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://support.google.com/firebase/answer/7015592
const firebaseConfig = {
    apiKey: "AIzaSyAHJad-1qW6LZfCTKu97w8flzPZUk5-SqM",
    authDomain: "todolistproject-ec4e0.firebaseapp.com",
    projectId: "todolistproject-ec4e0",
    storageBucket: "todolistproject-ec4e0.appspot.com",
    messagingSenderId: "53779584105",
    appId: "1:53779584105:web:f38134a02c2cf96fc9bef8"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


// Initialize Cloud Firestore and get a reference to the service
export const db = firebase.firestore();