import { firebaseStore } from "../firebase";
import { firebaseAuth } from "../firebase";

const getCurrentUserData = async (dispatch, type) => {
  const user = firebaseAuth.currentUser;
  const uid = user.uid;

  const userData = firebaseStore
    .collection("users")
    .where("uid", "==", uid)
    .onSnapshot((user) =>
      user.forEach((item) => {
        const data = item.data();
        dispatch({ type, data });
      })
    );

  return () => {
    userData();
  };
};

export default getCurrentUserData;
