// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDK_HV37T3roqcDs_GnSzh1c4NBplhDoAk",
  authDomain: "netflix-clone-b04b6.firebaseapp.com",
  projectId: "netflix-clone-b04b6",
  storageBucket: "netflix-clone-b04b6.appspot.com",
  messagingSenderId: "355820557466",
  appId: "1:355820557466:web:4026c1d7eda7012a3c3b23",
  measurementId: "G-4VK9MFE4R8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();