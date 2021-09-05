import { firebaseAuth } from "../firebase";

const authCheckUser = (chageLogin) => {
  firebaseAuth.onAuthStateChanged((user) => {
    if (user) {
      // User is signed in.
      chageLogin();
    } else {
      // No user is signed in
      console.log("logOut");
      // setLogin(false);
    }
  });
};
export default authCheckUser;
