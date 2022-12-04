import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA4vlXV91L1FlRGpoucpeiAHGrFTTasu54",
  authDomain: "test-e16f3.firebaseapp.com",
  projectId: "test-e16f3",
  storageBucket: "test-e16f3.appspot.com",
  messagingSenderId: "553677213728",
  appId: "1:553677213728:web:4a7db00c1ba8d7ff372c45",
  measurementId: "G-5F0QLJSPSF",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export { firebase };
