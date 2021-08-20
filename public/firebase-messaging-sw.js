// import { firebaseMessaging } from "../src/service/firebase";
importScripts("https://www.gstatic.com/firebasejs/8.8.0/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.8.0/firebase-messaging.js");

firebase.initializeApp({
  apiKey: "AIzaSyDADottT7ntCj8zHBCw8zlSn3TIgbhMD7w",
  authDomain: "instargram-graph.firebaseapp.com",
  databaseURL: "https://instargram-graph-default-rtdb.firebaseio.com",
  projectId: "instargram-graph",
  storageBucket: "instargram-graph.appspot.com",
  messagingSenderId: "477003740312",
  appId: "1:477003740312:web:6ce2dbe65a9858a40fcced",
  measurementId: "G-ETCQLQZ6H7",
});

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.

const messaging = firebase.messaging();
// token 받는걸 옮겨보자 login에 말고 main에서
