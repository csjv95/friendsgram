import { firebaseStore } from "../firebase";
import { firebaseAuth } from "../firebase";

const getFollowingList = (setFollowingList) => {
  // follow에 현제 uid follwing [] 가져오기
  const currentUserUid = firebaseAuth.currentUser.uid;
  const followingData = firebaseStore
    .collection("follow")
    .where("uid", "==", currentUserUid);

  followingData.onSnapshot((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      setFollowingList(doc.data().following);
    });
  });
};

export default getFollowingList;
