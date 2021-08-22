import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";
import "firebase/messaging";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGEING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const firebaseStore = firebaseApp.firestore();
const firebaseAuth = firebaseApp.auth();
const firebaseDatabase = firebaseApp.database();
const firebaseStorage = firebaseApp.storage();
const firebaseMessaging = firebaseApp.messaging();
firebaseAuth.setPersistence(firebase.auth.Auth.Persistence.SESSION);

export {
  firebase,
  firebaseApp,
  firebaseStore,
  firebaseAuth,
  firebaseDatabase,
  firebaseStorage,
  firebaseMessaging,
};
// post img 각자껄로 바꾸기

// 댓글기능 포스트창 관리

// 비밀번호 재설정 메일 보내는걸로 바꾸기 그리고 firebase에서 비번 지우기
