import { firebaseStore, firebaseAuth, firebase } from "../firebase";

const setBookMark = (postId, bookMarkData) => {
  const currentUserUid = firebaseAuth.currentUser.uid;
  const bookMark = firebaseStore.collection("bookMark").doc(postId);
  const isBookMark = bookMarkData.includes(currentUserUid);

  isBookMark
    ? bookMark.update({
      uid: firebase.firestore.FieldValue.arrayRemove(currentUserUid),
    })
    : bookMark.update({
      uid: firebase.firestore.FieldValue.arrayUnion(currentUserUid),
    });
};

export default setBookMark;
