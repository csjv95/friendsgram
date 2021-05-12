import {firebaseAuth} from "../firebase";

export const authLogout = () => {
  firebaseAuth.signOut();
}