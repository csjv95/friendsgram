import { firebaseStorage, firebaseAuth } from "../firebase";

const uploadData = (upLoadFile) => {
  const user = firebaseAuth.currentUser;
  const uid = user.uid;
  
  console.log("start of upload");
  if(upLoadFile === '' ) {
    alert(`please upload your image ${typeof(upLoadFile)}`)
  }
  const uploadStorage = firebaseStorage.ref(`/${uid}/${upLoadFile.name}`).put(upLoadFile);
};

export default uploadData;
