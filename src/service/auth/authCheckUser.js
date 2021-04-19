import { firebaseAuth } from "../firebase";

const authCheckUser = (setLogin) => {
  firebaseAuth.onAuthStateChanged(function (user) {
    if (user) {
      // User is signed in.
      console.log("login", user.uid);
      console.log(user);
      setLogin(true);
    } else {
      // No user is signed in
      console.log("logOut");
      setLogin(false);
    }
  });
};
export default authCheckUser;
