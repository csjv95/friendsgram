import { firebaseStore, firebaseAuth, firebase } from "../firebase";

const setHeart = async (postId, heartData) => {
  const currentUserUid = firebaseAuth.currentUser.uid;
  const heart = firebaseStore.collection("heart").doc(currentUserUid);
  const isHeart = heartData.includes(postId);

  isHeart
    ? heart.update({
      postId: firebase.firestore.FieldValue.arrayRemove(postId),
      })
    : heart.update({
      postId: firebase.firestore.FieldValue.arrayUnion(postId),
      });
};

export default setHeart;
