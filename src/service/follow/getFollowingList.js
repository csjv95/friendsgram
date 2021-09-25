import { firebaseStore } from "../firebase";
import { firebaseAuth } from "../firebase";

const getFollowingList = (dispatch, type) => {
  // follow에 현제 uid follwing [] 가져오기
  const currentUserUid = firebaseAuth.currentUser.uid;
  const followingData = firebaseStore
    .collection("follow")
    .where("uid", "==", currentUserUid);

  followingData.onSnapshot((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      const data = doc.data().following;
      dispatch({ type, data });
    });
  });
};

export default getFollowingList;
// getFollowingListAsync(dispatch, FOLLOWINGLIST_SUCCESS);

// const getFollowingList = () => {
//   const currentUserUid = firebaseAuth.currentUser.uid;
//   const followingData = firebaseStore
//     .collection("follow")
//     .where("uid", "==", currentUserUid);

//   followingData.onSnapshot((querySnapshot) => {
//     querySnapshot.forEach((doc) => {
//       const data = doc.data().following;
//       dispatch({ type: FOLLOWINGLIST_SUCCESS, data });
//     });
//   });
// };
// getFollowingList();
