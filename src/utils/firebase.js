/*
  BEGIN FIREBASE INITIALIZATION. DO NOT CHANGE.
*/

import firebase from 'firebase';

var config = {
  apiKey: "AIzaSyAnGToe32uufhl4ndk-Jwol4PWzuz8L3Ms",
  authDomain: "realtime-forum.firebaseapp.com",
  databaseURL: "https://realtime-forum.firebaseio.com",
  projectId: "realtime-forum",
  storageBucket: "realtime-forum.appspot.com",
  messagingSenderId: "262556829371"
};

firebase.initializeApp(config);

/*
  END FIREBASE INITIALIZATION. DO NOT CHANGE.
*/

const database = firebase.database();

export { firebase, database, };
