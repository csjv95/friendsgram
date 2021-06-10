import { firebaseStore } from "../firebase";

const getUserData = (uid, setData) => {
  const userData = firebaseStore.collection("users").doc(uid);

  userData.get().then((data) => {
    setData(data.data());
  });
};

export default getUserData;
