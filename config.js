import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyD_DB-MklnPBO4VDAmu5kFVSWFcyBtbD4o",
  authDomain: "quiz-buzzer-app-5a153.firebaseapp.com",
  databaseURL: "https://quiz-buzzer-app-5a153-default-rtdb.firebaseio.com",
  projectId: "quiz-buzzer-app-5a153",
  storageBucket: "quiz-buzzer-app-5a153.appspot.com",
  messagingSenderId: "845615158546",
  appId: "1:845615158546:web:81bece2cfdb7bf4d100fcb"
};

//Initialize firebase
let app = firebase.initializeApp(firebaseConfig);
export default app.database();