import { firebaseStore } from "../firebase";
import { firebaseAuth } from "../firebase";

const getPostData = async (setPostData, followingList) => {
  const user = firebaseAuth.currentUser;
  const uid = user.uid;
  const getFollowingList = followingList;
  const postData = [];

  getFollowingList.map(async (following) => {
    const followingPostData = firebaseStore
      .collection("post")
      .doc(following)
      .collection("my-post");

    let data = [];

    await followingPostData.get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        data.push(doc.data());
      });
    });
    postData.push(...data);
  });

  // 지금 followinglist = [A1f1CPUhmNPYQI8lUfDiVjuhxd43];
  const myPostData = firebaseStore
    .collection("post")
    .doc(uid)
    .collection("my-post");

  let data = [];

  await myPostData.get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      data.push(doc.data());
    });
  });
  postData.push(...data);

  // sort를 이용해서 timestamp로 내림차순으로 정렬
  postData.sort((a,b) => {
    return b.timestamp - a.timestamp;
  })

  setPostData(postData);
};

export default getPostData;
