import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration

const firebaseConfig = {
    apiKey: "AIzaSyDV7AhdiaQtSM6uOwI_OlhrAtIrQQkG6uY",
    authDomain: "cltracking.firebaseapp.com",
    projectId: "cltracking",
    storageBucket: "cltracking.appspot.com",
    messagingSenderId: "243826170452",
    appId: "1:243826170452:web:cdb1fa2c290ff96aa6ebc1",
    measurementId: "G-6Y2FFD3SG1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const provider = new GoogleAuthProvider();
export const storage = getStorage(app)

export default app