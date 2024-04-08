
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

export const app = firebase.initializeApp({
    "projectId": "proyect-wedding",       
    "appId": "1:860817338240:web:af278fa884c334e356db65",
    "storageBucket": "proyect-wedding.appspot.com",
    "locationId": "us-central",
    "apiKey": "AIzaSyAVr1Nlg9PTiUttPeBM8TBXIB-pbS_q9XQ",
    "authDomain": "proyect-wedding.firebaseapp.com",     
    "messagingSenderId": "860817338240"
  });