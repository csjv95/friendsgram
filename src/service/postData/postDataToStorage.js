import { firebaseStorage, firebaseAuth } from "../firebase";

const postDataToStorage = (imgs) => {
  const user = firebaseAuth.currentUser;
  const uid = user.uid;

  if (imgs === []) {
    alert(`please upload your image ${typeof imgs}`);
  }
  // 업로드
  imgs.forEach((img) => {
    firebaseStorage.ref(`/${uid}/${img.file.name}`).put(img.file);
  });
};

export default postDataToStorage;
