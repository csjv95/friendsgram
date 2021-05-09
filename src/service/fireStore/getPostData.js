import { firebaseStore } from "../firebase";
import { firebaseAuth } from "../firebase";

const getPostData = async (setPostData, followingList) => {
  const user = firebaseAuth.currentUser;
  const uid = user.uid;
  const getFollowingList = followingList;
  const postData = [];

  getFollowingList.map(async following => {
    const followingPostData = firebaseStore
    .collection("post")
    .doc(following)
    .collection("my-post")
    .orderBy("timestamp", "desc");

    let data = [];

    await followingPostData.get().then(querySnapshot => {
      querySnapshot.forEach(doc => {
        data.push(doc.data());
      })
      postData.push(...data);
    })
  })
  

  // 지금 followinglist = [A1f1CPUhmNPYQI8lUfDiVjuhxd43];
  const myPostData = firebaseStore
    .collection("post")
    .doc(uid)
    .collection("my-post")
    .orderBy("timestamp", "desc");

  let data = [];
  await myPostData.get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      data.push(doc.data());
    });
    postData.push(...data);
  });
  setPostData(postData);
};

export default getPostData;
