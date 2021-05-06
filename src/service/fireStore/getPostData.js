import { firebaseStore } from "../firebase";
import { firebaseAuth } from "../firebase";

const getPostData = async (setPostData,followingList) => {
  const user = firebaseAuth.currentUser;
  const uid = user.uid;
  const getFollowingList = followingList;

  // 지금 followinglist = [SivOS1FerqaFQMa9smx9EDldwzC2]; 
  const postData = firebaseStore
    .collection("post")
    .doc(uid)
    .collection("my-post")

  let data = [];
  await postData.get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      data.push(doc.data());
    });
    setPostData(data);
  });
};

export default getPostData;
