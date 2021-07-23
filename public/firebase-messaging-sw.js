importScripts("https://www.gstatic.com/firebasejs/8.7.0/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.7.0/firebase-messaging.js");

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

messaging.onBackgroundMessage((payload) => {
  console.log(
    "[firebase-messaging-sw.js] Received background message ",
    payload
  );

  // Customize notification here
  const { data, notification } = payload;
  const id = Object.values(data)[4];
  const notificationTitle = notification.title;
  const notificationOptions = {
    body: notification.body,
    id,
    icon: "/firebase-logo.png",
  };
  self.registration.showNotification(notificationTitle, notificationOptions);
});
