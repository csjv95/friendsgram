import firebase from 'firebase/app'
import { firebaseAuth } from "./firebase";

const googleAuth = () => {
  const googleProvider = new firebase.auth.GoogleAuthProvider();
  firebaseAuth
  .signInWithPopup(googleProvider)
  .then(result => console.log(result))
};

export default googleAuth;
