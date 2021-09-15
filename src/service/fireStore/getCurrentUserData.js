import { firebaseStore } from "../firebase";
import { firebaseAuth } from "../firebase";

const getCurrentUserData = async (dispatch, type) => {
  const user = firebaseAuth.currentUser;
  const uid = user.uid;

  const userData = firebaseStore.collection("users").where("uid", "==", uid);

  const data = userData.onSnapshot((user) => {
    user.docs.forEach((value) => {
      const data = value.data();
      dispatch({ type, data });
    });
  });

  return () => {
    data();
  };
};

export default getCurrentUserData;
