import * as firebase from 'firebase/app';
import "firebase/auth";
import 'firebase/firestore';
import 'firebase/functions';


const firebaseConfig = {
  apiKey: "AIzaSyBbZyQKvPAzOEyD_SmYklj9x0PZtKi1_8A",
  authDomain: "fooddonationapp-2ca8e.firebaseapp.com",
  databaseURL: "https://fooddonationapp-2ca8e.firebaseio.com",
  projectId: "fooddonationapp-2ca8e",
  storageBucket: "fooddonationapp-2ca8e.appspot.com",
  messagingSenderId: "193031223922",
  appId: "1:193031223922:web:5b359af2dcbc9ba8c960eb",
  measurementId: "G-QTFBF151KZ"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

//firebase.initializeApp (firebaseConfig);

// admin.initializeApp(firebaseConfig);

export const db = firebaseApp.firestore();

export const auth = firebaseApp.auth();

export const functions = firebaseApp.functions();
