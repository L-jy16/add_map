import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCtFTprkAcK0QBCELxyfxpE--Veo4byF0E",
    authDomain: "addplus-f2b1e.firebaseapp.com",
    projectId: "addplus-f2b1e",
    storageBucket: "addplus-f2b1e.appspot.com",
    messagingSenderId: "1048605238945",
    appId: "1:1048605238945:web:83204c5faae1b6844072e0"
};

firebase.initializeApp(firebaseConfig)
export default firebase;