import { firebaseStore, firebaseAuth } from "../firebase";

const postDataToStore = (text, noComments, location, postId) => {
  const timestamp = Date.now();
  // const time = new Date(timestamp); 여기서 하면 firestore가 seconds변환시켜줘서 받아올때 해주기;
  const currentUser = firebaseAuth.currentUser;
  const uid = currentUser.uid;
  const postData = firebaseStore.collection("post").doc(postId);
 
  postData.set({
    postId,
    imgsData: [],
    text,
    noComments,
    location,
    heart: [],
    bookmark: [],
    timestamp,
    uid,
  });
};

export default postDataToStore;
