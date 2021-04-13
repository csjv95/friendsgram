import { firebaseStorage, firebaseAuth } from "../firebase";

const uploadData = (imgs, setShowImg) => {
  const user = firebaseAuth.currentUser;
  const uid = user.uid;

  if (imgs === []) {
    alert(`please upload your image ${typeof imgs}`);
  }
  // 업로드
  imgs.forEach((img) => {
    firebaseStorage.ref(`/${uid}/${img.file.name}`).put(img.imgUrl);
  });
};

export default uploadData;
