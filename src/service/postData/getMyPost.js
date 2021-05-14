import { firebaseStore, firebaseAuth } from "../firebase";

export const getMyPost = () => {
  const currentUserUid = firebaseAuth.currentUser.uid;

  const myPost = firebaseStore
    .collection("post")
    .doc(currentUserUid)
    .collection("my-post");
};
