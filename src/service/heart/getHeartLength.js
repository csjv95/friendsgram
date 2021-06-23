import { firebaseStore } from "../firebase";

const getHeartLength = (postId, setHeartLength) => {
  const heartLength = firebaseStore
    .collection("post")
    .where("postId", "==", postId).onSnapshot((field) => {
    field.forEach((item) => setHeartLength(item.data().heart));
  });

  return () => {
    heartLength();
  }
};

export default getHeartLength;
