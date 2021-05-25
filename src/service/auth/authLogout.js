import {firebaseAuth} from "../firebase";

export const authLogout = (props) => {
  firebaseAuth.signOut();
  console.log(props);
}