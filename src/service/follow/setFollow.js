import { firebaseStore, firebaseAuth, firebase } from "../firebase";

const setFollow = async (targetUser, followingList) => {
  const currentUserUid = firebaseAuth.currentUser.uid;

  // 현재 유저의 collection("follow")
  const currentUserFollow = firebaseStore.collection("follow").doc(currentUserUid);

  // 선택된 유저의 collection("follow")
  const selectUserFollow = firebaseStore.collection("follow").doc(targetUser);

  // 현재유저의 followingList에 tatgetUser의 uid가 있으면 ture 없으면 false
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
    
    console.log("팔로잉 완료");
  }
};

export default setFollow;

