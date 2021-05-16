import { firebaseStore, firebaseAuth } from "../firebase";

export const getMyPost = async (setMyPostData) => {
  const currentUserUid = firebaseAuth.currentUser.uid;
  const postData = [];

  const myPost = firebaseStore
    .collection("post")
    .doc(currentUserUid)
    .collection("my-post");

  await myPost.get().then((post) => {
    post.forEach((data) => postData.push(data.data()));
  });

  postData.sort((a, b) => {
    return b.timestamp - a.timestamp;
  });
  
  setMyPostData(postData);
};
