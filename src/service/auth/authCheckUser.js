import { firebaseAuth } from "../firebase";

const authCheckUser = (changeLoginState) => {
  firebaseAuth.onAuthStateChanged((user) => {
    if (user) {
      // User is signed in.
      changeLoginState();
    } else {
      // No user is signed in
      console.log("logOut");
      // setLogin(false);
    }
  });
};
export default authCheckUser;
