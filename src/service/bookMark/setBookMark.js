import { firebaseStore, firebaseAuth, firebase } from "../firebase";

const setBookMark = (postId, bookMarkPostIds) => {
  const currentUserUid = firebaseAuth.currentUser.uid;
  const bookMark = firebaseStore.collection("bookMark").doc(currentUserUid);
  const whoBookMark = firebaseStore.collection("post").doc(postId);
  const isBookMark = bookMarkPostIds.includes(postId);

  if (isBookMark) {
    bookMark.update({
      postId: firebase.firestore.FieldValue.arrayRemove(postId),
    });
    whoBookMark.update({
      bookmark: firebase.firestore.FieldValue.arrayRemove(currentUserUid),
    });
  } else {
    bookMark.update({
      postId: firebase.firestore.FieldValue.arrayUnion(postId),
    });
    whoBookMark.update({
      bookmark: firebase.firestore.FieldValue.arrayUnion(currentUserUid),
    });
  }
};

export default setBookMark;
