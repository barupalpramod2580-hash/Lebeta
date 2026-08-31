import { initializeApp } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-storage.js";

const firebaseConfig = {
  apiKey: "AIzaSyDorG8j1ehnH53Wf7DWHH-6QN2B-7ynr8",
  authDomain: "lebeta.firebaseapp.com",
  projectId: "lebeta",
  storageBucket: "lebeta.firebasestorage.app",
  messagingSenderId: "410848164943",
  appId: "1:410848164943:web:e55c31eb1a5f743582fe3a"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
