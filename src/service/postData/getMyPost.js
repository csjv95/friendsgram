import { firebaseStore } from "../firebase";

export const getMyPost = async (setMyPostData, match) => {
  const postData = [];
  const matchUser = [];

  const user = firebaseStore
    .collection("users")
    .where("displayName", "==", match.username);

  await user
    .get()
    .then((user) => user.forEach((data) => matchUser.push(data.data().uid)));

  const myPost = firebaseStore
    .collection("post")
    .doc(...matchUser)
    .collection("my-post");

  await myPost.get().then((post) => {
    post.forEach((data) => postData.push(data.data()));
  });

  postData.sort((a, b) => {
    return b.timestamp - a.timestamp;
  });
  setMyPostData(postData);
};
