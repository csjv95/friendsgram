import { firebaseStore, firebaseAuth, firebase } from "../firebase";

const setHeart = async (postId, heartData) => {
  const currentUserUid = firebaseAuth.currentUser.uid;
  const heart = firebaseStore.collection("heart").doc(postId);
  const isHeart = heartData.includes(currentUserUid);

  if (isHeart) {
    heart.update({
      uid: firebase.firestore.FieldValue.arrayRemove(currentUserUid),
    });
  } else {
    heart.update({
      uid: firebase.firestore.FieldValue.arrayUnion(currentUserUid),
    });
  }
};

export default setHeart;
