import { firebaseStore, firebaseAuth, firebase } from "../firebase";

const setHeart = async (postId, heartData) => {
  const currentUserUid = firebaseAuth.currentUser.uid;
  const heart = firebaseStore.collection("heart").doc(currentUserUid);
  const whoHeart = firebaseStore.collection("post").doc(postId);
  
  const isHeart = heartData.includes(postId);

  if (await isHeart) {
    heart.update({
      postId: firebase.firestore.FieldValue.arrayRemove(postId),
    });
    whoHeart.update({
      heart: firebase.firestore.FieldValue.arrayRemove(currentUserUid),
    });
  } else {
    heart.update({
      postId: firebase.firestore.FieldValue.arrayUnion(postId),
    });
    whoHeart.update({
      heart: firebase.firestore.FieldValue.arrayUnion(currentUserUid),
    });
  }
};

export default setHeart;
