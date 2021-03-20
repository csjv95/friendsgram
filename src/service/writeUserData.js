import firebase from 'firebase/app'
import { firebaseDatabase } from "./firebase";

const writeUserData = (email, name, nicName, password) => {
  firebase
    .database()
    .ref("users/" + name)
    .set({
      email : email,
      name: name,
      nicname : nicName,
      password: password,
    });
};

export default writeUserData;
