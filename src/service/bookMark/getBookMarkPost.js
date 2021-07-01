import { firebaseStore } from "../firebase";

const getBookMarkPost = (bookMarkPostIds, setBookMarkPosts) => {
  const sum = [];

  firebaseStore.collection("bookMark").onSnapshot(
    bookMarkPostIds.map((postId) =>
      firebaseStore
        .collection("post")
        .where("postId", "==", postId)
        .get()
        .then((item) => {
          item.forEach((doc) => {
            sum.push(doc.data());
          });
          setBookMarkPosts(sum);
        })
    )
  );
};

export default getBookMarkPost;
