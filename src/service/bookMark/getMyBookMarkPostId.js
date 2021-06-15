import { firebaseStore, firebaseAuth } from "../firebase";

const getMyBookMarkPostId = async (setBookMarkPosts) => {
  const currentUserUid = firebaseAuth.currentUser.uid;

  const bookmarkCollection = firebaseStore
    .collection("bookMark")
    .where("uid", "array-contains", currentUserUid);

  const myBookMarkMap = [];

 await bookmarkCollection.get().then(item => {
    item.forEach(doc => {
      myBookMarkMap.push(doc.data().postId);
    })
  })
  setBookMarkPosts(myBookMarkMap)
};

export default getMyBookMarkPostId;
