// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDWlQmqnai9LWy9ZTO-BgjXpPB-9QFjYRE",
  authDomain: "todo-app-v2-80867.firebaseapp.com",
  projectId: "todo-app-v2-80867",
  storageBucket: "todo-app-v2-80867.appspot.com",
  messagingSenderId: "977808652297",
  appId: "1:977808652297:web:eecd9a9c5d446e757c60d8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);