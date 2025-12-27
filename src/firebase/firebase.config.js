// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyALvJRD19hdqjLdw_nzHRSrd5Izyi_5dvQ",
  authDomain: "wdm-9-a334f.firebaseapp.com",
  projectId: "wdm-9-a334f",
  storageBucket: "wdm-9-a334f.firebasestorage.app",
  messagingSenderId: "101376880464",
  appId: "1:101376880464:web:f821703a2cf62b75e44655",
  measurementId: "G-SRVEGZTC8R",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
export { auth, analytics };
