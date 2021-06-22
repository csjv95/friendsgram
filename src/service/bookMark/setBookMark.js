import { firebaseStore, firebaseAuth, firebase } from "../firebase";

const setBookMark = (postId, bookMarUid) => {
  const currentUserUid = firebaseAuth.currentUser.uid;
  const bookMark = firebaseStore.collection("bookMark").doc(currentUserUid);
  const isBookMark = bookMarUid.includes(postId); // true or false

  isBookMark
    ? bookMark.update({
        postId: firebase.firestore.FieldValue.arrayRemove(postId),
      })
    : bookMark.update({
        postId: firebase.firestore.FieldValue.arrayUnion(postId),
      });
};

export default setBookMark;
