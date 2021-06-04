import { firebaseStore, firebaseAuth } from "../firebase";

const getFollowerList = async (setFollowerList) => {
  // follow에 현제 uid follwing [] 가져오기
  const currentUserUid = firebaseAuth.currentUser.uid;
  const followerData = firebaseStore.collection("follow").where("uid", "==", currentUserUid);

  await followerData.get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      setFollowerList(doc.data().follower);
    });
  });
};

export default getFollowerList;
