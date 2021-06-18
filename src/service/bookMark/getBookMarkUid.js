import { firebaseStore } from "../firebase";

const getBookMarkUid = (postId, setBookMarkData) => {
  const bookMark = firebaseStore
    .collection("bookMark")
    .doc(postId)
    .onSnapshot((bookMark) => {
      setBookMarkData(bookMark.data().uid);
    });

  return () => {
    bookMark();
  };
};

export default getBookMarkUid;
