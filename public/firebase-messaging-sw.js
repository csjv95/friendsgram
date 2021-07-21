// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here. Other Firebase libraries
// are not available in the service worker.
import firebase from "firebase/app";
importScripts("https://www.gstatic.com/firebasejs/8.7.0/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.7.0/firebase-messaging.js");

// Initialize the Firebase app in the service worker by passing in
// your app's Firebase config object.
// https://firebase.google.com/docs/web/setup#config-object
firebase.initializeApp({
  apiKey: "AIzaSyDADottT7ntCj8zHBCw8zlSn3TIgbhMD7w",
  authDomain: "instargram-graph.firebaseapp.com",
  databaseURL: "https://instargram-graph-default-rtdb.firebaseio.com",
  projectId: "instargram-graph",
  storageBucket: "instargram-graph.appspot.com",
  messagingSenderId: "477003740312",
  appId: "477003740312:web:6ce2dbe65a9858a40fcced",
  measurementId: "G-ETCQLQZ6H7",
});

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();

messaging.onMessage((payload) => {
  console.log("Message received. ", payload);
  // ...
});
