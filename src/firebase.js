// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

//database adding
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyBdEJeeP_fijDdPz78813yDNAmOjHXmUA4",
	authDomain: "justtry-recommend.firebaseapp.com",
	projectId: "justtry-recommend",
	storageBucket: "justtry-recommend.appspot.com",
	messagingSenderId: "998145337188",
	appId: "1:998145337188:web:25ed94ae85826a4becbc71",
	measurementId: "G-B41HQXEL0B",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);
const database = getDatabase(app);

export { auth, db, database };
