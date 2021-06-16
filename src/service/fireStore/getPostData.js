import { firebaseStore,firebaseAuth } from "../firebase";

const getPostData = async (setPostData, followingList) => {
  const currentUserUid = firebaseAuth.currentUser.uid;
  const getFollowingList = followingList;
  const postData = [];

  getFollowingList.map(async (following) => {
    const followingPostData = firebaseStore
      .collection("post")
      .where("uid","==",following)

    let data = [];
    
    await followingPostData.get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        data.push(doc.data());
      });
    });
    postData.push(...data);
  });

  const myPostData = firebaseStore
    .collection("post")
    .where("uid","==",currentUserUid)

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
