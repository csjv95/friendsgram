import { firebaseStore } from "../firebase";
import { firebaseAuth, firebase } from "../firebase";

const setFollow = async (targetUser, followingList,setIsFollowing) => {
  const currentUserUid = firebaseAuth.currentUser.uid;
  const currentUserFollow = firebaseStore.collection("follow").doc(currentUserUid);
  const selectUserFollow = firebaseStore.collection("follow").doc(targetUser);
  const isFollowing = followingList.includes(targetUser);
  
  if (isFollowing) {
    // following 삭제
    await currentUserFollow.update({
      following: firebase.firestore.FieldValue.arrayRemove(targetUser),
    });

    //follower 삭제
    await selectUserFollow.update({
      follower: firebase.firestore.FieldValue.arrayRemove(currentUserUid),
    });
    await setIsFollowing('')
    console.log("언팔로잉");

  } else {
    // following 업데이트 하기
    await currentUserFollow.update({
      following: firebase.firestore.FieldValue.arrayUnion(targetUser),
    });

    // follower 업데이트 하기
    await selectUserFollow.update({
      follower: firebase.firestore.FieldValue.arrayUnion(currentUserUid),
    });
    await setIsFollowing(targetUser)
    console.log("팔로잉 완료");
  }
};

export default setFollow;
