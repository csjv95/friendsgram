import { firebaseAuth, firebaseStore } from "../firebase";

const setComments = (postId, uid, comment) => {
  const time = new Date(Date.now());
  const photoURL = firebaseAuth.currentUser.photoURL;
  const displayName = firebaseAuth.currentUser.displayName;
  const comments = firebaseStore
    .collection("comments")
    .doc(postId)
    .collection("comment")
    .doc();

  comments.set({ comment, time, uid, photoURL, displayName });
};
export default setComments;
