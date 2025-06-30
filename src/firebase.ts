// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyB_B5hhjNWDdTqSw0jrqIl0dvYUFZeJGHc',
  authDomain: 'modsenmappie.firebaseapp.com',
  projectId: 'modsenmappie',
  storageBucket: 'modsenmappie.firebasestorage.app',
  messagingSenderId: '898661847929',
  appId: '1:898661847929:web:008f9eda8668bb4eabd5a8',
  measurementId: 'G-WFZ8BH2X0F',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
