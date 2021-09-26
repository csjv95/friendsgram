import { firebaseStore, firebaseAuth } from "../firebase";

const getFollowerList = (dispatch, type) => {
  // follow에 현제 uid follwing [] 가져오기
  const currentUserUid = firebaseAuth.currentUser.uid;
  const followerData = firebaseStore
    .collection("follow")
    .where("uid", "==", currentUserUid);

  followerData.onSnapshot((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      const followerList = doc.data().follower;
      dispatch({ type, followerList });
    });
  });
};

export default getFollowerList;
