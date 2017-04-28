/*
  BEGIN FIREBASE INITIALIZATION. DO NOT CHANGE.
*/

import firebase from 'firebase/app';

var config = {
};

firebase.initializeApp(config);

/*
  END FIREBASE INITIALIZATION. DO NOT CHANGE.
*/



export { firebase, database: firebase.database, };
