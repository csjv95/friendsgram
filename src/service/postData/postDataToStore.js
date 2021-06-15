import { firebaseStore, firebaseAuth } from "../firebase";

const postDataToStore = (text, noComments, location, postId) => {
  const timestamp = Date.now();
  // const time = new Date(timestamp); 여기서 하면 firestore가 seconds변환시켜줘서 받아올때 해주기;
  const currentUser = firebaseAuth.currentUser;
  const uid = currentUser.uid
  const postData = firebaseStore.collection("post").doc(postId);
  const heart = firebaseStore.collection("heart").doc(postId);
  const bookMark = firebaseStore.collection("bookMark").doc(postId);

  heart.set({
    postId,
    uid: [],
  });

  bookMark.set({
    postId,
    uid: [],
  });

  postData.set({
    postId,
    imgsData: [],
    text,
    noComments,
    location,
    timestamp,
    uid,
  });
};

export default postDataToStore;
