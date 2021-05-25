import {firebaseAuth} from "../firebase";

export const authLogout = async(props) => {
  await firebaseAuth.signOut();
  window.location.href=`/`;
}