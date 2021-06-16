import { firebaseStore, firebaseAuth } from "../firebase";

const getBookMarkPostId = async (setBookMarkPostId) => {
  const currentUserUid = firebaseAuth.currentUser.uid;
  const myBookMarkMap = [];

  const bookmarkCollection = firebaseStore
    .collection("bookMark")
    .where("uid", "array-contains", currentUserUid);

  await bookmarkCollection.get().then((item) => {
    item.forEach((doc) => {
      myBookMarkMap.push(doc.data().postId);
    });
  });
  setBookMarkPostId(myBookMarkMap);
};

export default getBookMarkPostId;
