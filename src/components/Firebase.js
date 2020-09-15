import * as firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/functions';
import "firebase/auth";
//import * as admin from 'firebase-admin';

//const admin = require('firebase-admin');
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

  export const db = firebase.firestore();

  export const auth = firebase.auth();

  export const functions = firebase.functions();

  //export const root = admin.auth();


  // export const database = admin.database();

  // export const database = admin.database();

  // Initialize the default app
 

// console.log(defaultApp.name);  // '[DEFAULT]'

// // Retrieve services via the defaultApp variable...
// var defaultAuth = defaultApp.auth();
// var defaultDatabase = defaultApp.database();

// // ... or use the equivalent shorthand notation
// defaultAuth = admin.auth();
// defaultDatabase = admin.database();

