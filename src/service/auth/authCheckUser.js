import { firebaseAuth } from "../firebase";

const authCheckUser = (dispatch, type) => {
  firebaseAuth.onAuthStateChanged((user) => {
    if (user) {
      // User is signed in.
      dispatch({ type });
    } else {
      // No user is signed in
      console.log("logOut");
      // setLogin(false);
    }
  });
};
export default authCheckUser;
