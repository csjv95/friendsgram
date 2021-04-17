import { firebaseStorage, firebaseAuth } from "../firebase";

const uploadData = async(imgs) => {
  const user = firebaseAuth.currentUser;
  const uid = user.uid;

  if (imgs === []) {
    alert(`please upload your image ${typeof imgs}`);
  }
  // 업로드
  await imgs.forEach((img) => {
    firebaseStorage.ref(`/${uid}`).put(img.file);
  });

};

export default uploadData;
