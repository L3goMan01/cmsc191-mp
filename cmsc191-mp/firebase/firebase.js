// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD1wOLOUnrsSHd6aYuOiVYVHLfqoU_-bCc",
  authDomain: "pghdigitalprescriptionsystem.firebaseapp.com",
  projectId: "pghdigitalprescriptionsystem",
  storageBucket: "pghdigitalprescriptionsystem.firebasestorage.app",
  messagingSenderId: "78752911119",
  appId: "1:78752911119:web:a807ebccfd91735ce9b87a"
};

let app;
let db;

if (typeof window !== "undefined") {
  app = initializeApp(firebaseConfig);
  db = getFirestore(app); // Single db instance
}

export { app, db }; // Export the Firestore instance only if defined
// const app = initializeApp(firebaseConfig);
// export const auth = getAuth(app);
// export const db = getFirestore(app);
// export const storage = getStorage(app);