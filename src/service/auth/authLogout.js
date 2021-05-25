import {firebaseAuth} from "../firebase";

export const authLogout = (props) => {
  firebaseAuth.signOut();
  window.location.href=`/`;
}