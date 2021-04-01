import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCc1zX1OnsSimxgIXNf5GDJfphLnyHJZck",
    authDomain: "employee-manager-jjohnston40.firebaseapp.com",
    projectId: "employee-manager-jjohnston40",
    storageBucket: "employee-manager-jjohnston40.appspot.com",
    messagingSenderId: "105538773392",
    appId: "1:105538773392:web:5919de0ac5b993dc431315",
    measurementId: "G-MV1YVY3N8X"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  export default firebaseApp;