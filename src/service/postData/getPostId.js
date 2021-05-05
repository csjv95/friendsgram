import { firebaseStore, firebaseAuth } from "../firebase";

export const getPostId = (setPostId) => {
  const currentUserUid = firebaseAuth.currentUser.uid;
  const postId = firebaseStore
    .collection("post")
    .doc(currentUserUid)
    .collection("my-post")
    .doc().id;

    setPostId(postId);
};
