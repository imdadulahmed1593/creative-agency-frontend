// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyBMHVM8hP8EWvQXVW_Lat5Mct_NZGbBPCA",
  authDomain: "creative-agency-frontend-7fa96.firebaseapp.com",
  databaseURL: "https://creative-agency-frontend-7fa96.firebaseio.com",
  projectId: "creative-agency-frontend-7fa96",
  storageBucket: "creative-agency-frontend-7fa96.appspot.com",
  messagingSenderId: "242322840294",
  appId: "1:242322840294:web:770d72c0e5de6691a53927",
  measurementId: "G-CVXB6PP3Z2",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
