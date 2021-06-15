import { firebaseStore } from "../firebase";

export const getPostId = (setPostId) => {
  const postId = firebaseStore
    .collection("post")
    .doc().id

    setPostId(postId);
};
