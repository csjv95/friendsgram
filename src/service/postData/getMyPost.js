import { firebaseStore } from "../firebase";

export const getMyPost = async (setMyPostData, match) => {
  const postData = [];
  const matchUser = [];

  const user = firebaseStore
    .collection("users")
    .where("displayName", "==", match);

  await user
    .get()
    .then((user) => user.forEach((data) => matchUser.push(data.data().uid)));

  matchUser.length !== 0 &&
    (await firebaseStore
      .collection("post")
      .where("uid", "==", ...matchUser)
      .get()
      .then((post) => {
        post.forEach((data) => postData.push(data.data()));
      }));

  postData.sort((a, b) => {
    return b.timestamp - a.timestamp;
  });

  setMyPostData(postData);
};
