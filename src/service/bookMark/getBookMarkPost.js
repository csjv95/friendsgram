import { firebaseStore } from "../firebase";

const getBookMarkPost = async (bookMarkPostId, setBookMarkPost) => {
  const sum = [];
  await bookMarkPostId.map((postId) =>
    firebaseStore
      .collection("post")
      .where("postId", "==", postId)
      .get()
      .then((item) => {
        item.forEach((doc) => {
          sum.push(doc.data());
        });
      })
  );
  setBookMarkPost(sum);
};

export default getBookMarkPost;
