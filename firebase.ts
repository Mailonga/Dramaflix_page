// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCEkWRhL8hf9R2uUBzy2iatan9HCOm4IVg",
    authDomain: "dramaflix-page.firebaseapp.com",
    projectId: "dramaflix-page",
    storageBucket: "dramaflix-page.appspot.com",
    messagingSenderId: "361374123874",
    appId: "1:361374123874:web:bfb159c6cbd4f59b3b8e3b"
  };

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }