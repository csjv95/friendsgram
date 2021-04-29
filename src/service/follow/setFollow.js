import { firebaseStore } from "../firebase";
import { firebaseAuth, firebase } from "../firebase";

const setFollow = async (targetUser) => {
  const user = firebaseAuth.currentUser;
  const uid = user.uid;
  const currentUserFollow = firebaseStore.collection("follow").doc(uid);
  const selectUserFollow = firebaseStore.collection("follow").doc(targetUser);

  // following 업데이트 하기
  await currentUserFollow
    .update({
      following: firebase.firestore.FieldValue.arrayUnion(targetUser)
    })

  // follower 업데이트 하기
  await selectUserFollow
    .update({
      follower: firebase.firestore.FieldValue.arrayUnion(uid)
    })
};

export default setFollow;
