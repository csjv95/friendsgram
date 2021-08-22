import { firebaseStore } from "../firebase";
import { firebaseAuth } from "../firebase";

const getCurrenttUserData = async (setUserData) => {
  const user = firebaseAuth.currentUser;
  const uid = user.uid;

  const userData = firebaseStore.collection("users").where("uid", "==", uid);

  const data = userData.onSnapshot((user) =>
    user.forEach((data) => setUserData(data.data()))
  );

  return () => {
    data();
  };
};

export default getCurrenttUserData;
