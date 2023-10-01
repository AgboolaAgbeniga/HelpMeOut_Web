// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyDls9ciYgRQ34I1hEwhcSkRxHKFVtJD9f0",
	authDomain: "screenrecord-46186.firebaseapp.com",
	projectId: "screenrecord-46186",
	storageBucket: "screenrecord-46186.appspot.com",
	messagingSenderId: "976255013482",
	appId: "1:976255013482:web:9935fb77e3b482987e3013",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);