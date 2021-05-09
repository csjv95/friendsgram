import { firebaseStore } from "../firebase";
import { firebaseAuth } from "../firebase";

const getPostData = async (setPostData,followingList) => {
  const user = firebaseAuth.currentUser;
  const uid = user.uid;
  const getFollowingList = followingList;
  
  // 지금 followinglist = [A1f1CPUhmNPYQI8lUfDiVjuhxd43]; 
  const myPostData = firebaseStore
    .collection("post")
    .doc(uid)
    .collection("my-post")
    .orderBy("timestamp","desc")

  let data = [];
  await myPostData.get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      data.push(doc.data());
    });
    setPostData(data);
  });
};

export default getPostData;
