import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDADottT7ntCj8zHBCw8zlSn3TIgbhMD7w",
  authDomain: "instargram-graph.firebaseapp.com",
  projectId: "instargram-graph",
  storageBucket: "instargram-graph.appspot.com",
  messagingSenderId: "477003740312",
  appId: "1:477003740312:web:6ce2dbe65a9858a40fcced",
  measurementId: "G-ETCQLQZ6H7",
};
firebase.initializeApp(firebaseConfig);
const firestore  = firebase.firestore();

export {firestore};
