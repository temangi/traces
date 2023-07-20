import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDOeiZBYfWlArDjU8LTbC2_LHzr7AaP7GI",
  authDomain: "traces-eaa67.firebaseapp.com",
  projectId: "traces-eaa67",
  storageBucket: "traces-eaa67.appspot.com",
  messagingSenderId: "978533620528",
  appId: "1:978533620528:web:40663fede2f97bc9a486f5",
  measurementId: "G-0G7M4JLPCP",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
