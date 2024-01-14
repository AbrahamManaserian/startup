// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getStorage } from 'firebase/storage';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDBkgSJvdQu84a7IYQ69RmwpjnxPYgHP7k',
  authDomain: 'start-up-fb4fa.firebaseapp.com',
  projectId: 'start-up-fb4fa',
  storageBucket: 'start-up-fb4fa.appspot.com',
  messagingSenderId: '842221094605',
  appId: '1:842221094605:web:8c124756d7251d0b8dcb84',
  measurementId: 'G-KPFG7GZXX8',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);
export const storage = getStorage(app);
export default getFirestore();
export const auth = getAuth(app);
// export const functions = getFunctions(app);
