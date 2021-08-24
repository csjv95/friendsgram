import { firebaseStore } from "../firebase";

const getComments = (postId, setComment) => {
  const comments = firebaseStore
    .collection("comments")
    .doc(postId)
    .collection("comment")
    .onSnapshot((doc) => {
      const arr = [];
      doc.forEach((item) => {
        arr.push(item.data());
      });
      setComment(arr);
    });

  return () => {
    comments();
  };
};

export default getComments;
