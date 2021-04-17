import { firebaseStorage } from "../firebase";
import { firebaseAuth } from "../firebase";

const getStorage = (img) => {
  const user = firebaseAuth.currentUser;
  const uid = user.uid;

  firebaseStorage.ref(`/${uid}/${img.file.name}`).put(img.file);
}

export default getStorage;