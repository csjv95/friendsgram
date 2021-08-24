import { firebaseStore } from "../firebase";

const setComments = (postId, uid, comment) => {
  const time = new Date(Date.now());

  const comments = firebaseStore
    .collection("comments")
    .doc(postId)
    .collection("comment")
    .doc(uid);

  comments.set({ comment, time, uid });
};
export default setComments;
