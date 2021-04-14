import { firebaseStore } from "../firebase";
import { firebaseAuth } from "../firebase";

const postDataToStore = (imgs, text, chat, addressName) => {
  const now = new Date();
  const user = firebaseAuth.currentUser;
  const uid = user.uid;
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
    imgs : link,
    text,
    chat,
    addressName,
    now,
  });
};

export default postDataToStore;
