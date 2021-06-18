import { firebaseStore, firebaseAuth } from "../firebase";

const getBookMarkPostId = (setBookMarkPostId) => {
  const currentUserUid = firebaseAuth.currentUser.uid;
  const myBookMarkMap = [];

  const bookmarkCollection = firebaseStore
    .collection("bookMark")
    .where("uid", "array-contains", currentUserUid);
  
  bookmarkCollection.onSnapshot((item) => {
    item.forEach((doc) => {
      if (!myBookMarkMap.includes(doc.data().postId)) {
        myBookMarkMap.push(doc.data().postId);
      }
    });
  });
  setBookMarkPostId(myBookMarkMap);
};

export default getBookMarkPostId;
