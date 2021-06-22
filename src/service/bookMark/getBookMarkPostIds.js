import { firebaseStore, firebaseAuth } from "../firebase";

const getBookMarkPostIds = (setBookMarkPostIds) => {
  const currentUserUid = firebaseAuth.currentUser.uid;

  const bookMark = firebaseStore
    .collection("bookMark")
    .doc(currentUserUid)
    .onSnapshot((bookMark) => {
      setBookMarkPostIds(bookMark.data().postId);
    });

  return () => {
    bookMark();
  };
};

export default getBookMarkPostIds;
