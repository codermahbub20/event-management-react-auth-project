// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBeKqkxtz7u52H1QDaYM4LJadRezjCOv34",
  authDomain: "event-management-react-project.firebaseapp.com",
  projectId: "event-management-react-project",
  storageBucket: "event-management-react-project.appspot.com",
  messagingSenderId: "1038877792163",
  appId: "1:1038877792163:web:e6a6f4d53cd7dcff902c16"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;