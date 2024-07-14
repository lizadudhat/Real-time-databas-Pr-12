
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBHLdPazgWVx-XHlqCcMwEP9LG1qi-8T6s",
  authDomain: "project-12-real-time-database.firebaseapp.com",
  databaseURL: "https://project-12-real-time-database-default-rtdb.firebaseio.com",
  projectId: "project-12-real-time-database",
  storageBucket: "project-12-real-time-database.appspot.com",
  messagingSenderId: "871957541196",
  appId: "1:871957541196:web:115d05c9990c4690091fe9",
  measurementId: "G-Y9ZWKPPPZC"
};

 export const app = initializeApp(firebaseConfig);
