import { firebaseStore, firebaseAuth } from "../firebase";

const getBookMarkPostIds = (dispatch, type) => {
  const currentUserUid = firebaseAuth.currentUser.uid;

  const bookMark = firebaseStore
    .collection("bookMark")
    .doc(currentUserUid)
    .onSnapshot((item) => {
      // bookMark.data() && setBookMarkPostIds(bookMark.data().postId);
      const bookMark = item.data().postId;
      dispatch({ type, bookMark });
    });

  return () => {
    bookMark();
  };
};

export default getBookMarkPostIds;
