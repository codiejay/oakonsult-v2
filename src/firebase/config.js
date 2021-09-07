import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBhHExmX-iOTG1AhyXTd-RU_l7yzEQxyv4",
  authDomain: "oakonsult-2021.firebaseapp.com",
  projectId: "oakonsult-2021",
  storageBucket: "oakonsult-2021.appspot.com",
  messagingSenderId: "186345215424",
  appId: "1:186345215424:web:566ecccda762d59faaa425",
  measurementId: "G-5TGXQVV9V3",
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export default firebase;
