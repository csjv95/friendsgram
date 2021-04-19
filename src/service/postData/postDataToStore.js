import { firebaseStore } from "../firebase";
import { firebaseAuth } from "../firebase";

const postDataToStore = (imgs, text, noComments, location) => {
  const timestamp = Date.now();
  // const time = new Date(timestamp); 여기서 하면 firestore가 seconds변환시켜줘서 받아올때 해주기;
  const user = firebaseAuth.currentUser;
  const uid = user.uid;
  const displayName = user.displayName;

  const postData = firebaseStore
    .collection("users")
    .doc(uid)
    .collection("post")
    .doc();

  const link = [];
  imgs.forEach((pic) => {
    link.push(pic.file.name);
  });

  // 사진,텍스트,로케이션,댓글가능
  postData.set({
    displayName,
    imgs: link,
    text,
    noComments,
    location,
    timestamp,
  });
};

export default postDataToStore;
