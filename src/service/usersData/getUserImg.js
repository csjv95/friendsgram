import { firebaseStore } from "../firebase";

const getUserImg = (uid, setPhotoURL) => {
  const profileImg = firebaseStore
    .collection("users")
    .where("uid", "==", uid)
    .onSnapshot((user) =>
      user.forEach((data) => setPhotoURL(data.data().photoURL))
    );

  return () => {
    profileImg();
  };
};

export default getUserImg;
