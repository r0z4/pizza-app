import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// Se quiser, pode manter o analytics, mas não é obrigatório para funcionar o banco!

const firebaseConfig = {
  apiKey: "AIzaSyDMG3KnPy0aC0UbwAP77yfSHn8WWfjL6MM",
  authDomain: "pizza-app-firebase-86f3e.firebaseapp.com",
  projectId: "pizza-app-firebase-86f3e",
  storageBucket: "pizza-app-firebase-86f3e.firebasestorage.app",
  messagingSenderId: "1059028670027",
  appId: "1:1059028670027:web:a333730410156672e19fce",
  measurementId: "G-B0JKJGEC3M"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
