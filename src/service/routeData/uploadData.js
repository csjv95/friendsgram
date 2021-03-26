import { firebaseStorage, firebaseAuth } from "../firebase";

const uploadData = (upLoadFile,setShowImg) => {
  const user = firebaseAuth.currentUser;
  const uid = user.uid;
  
  console.log("start of upload");
  
  if(upLoadFile === '' ) {
    alert(`please upload your image ${typeof(upLoadFile)}`)
  }
  // 업로드
  const uploadStorage = firebaseStorage.ref(`/${uid}/${upLoadFile.name}`).put(upLoadFile);
  console.log('성공적으로 업로드를 했습니다');

  // 업로드된 사진 가져오기
  // uploadStorage.on('state_changed', 
  //   (snapShot) => {
  //     //takes a snap shot of the process as it is happening
  //     console.log(snapShot)
  //   }, (err) => {
  //     //catches the errors
  //     console.log(err)
  //   }, () => {
  //     //버튼눌러서 업로드 했으면 사진띄우기로 stroage로 보내서 업로드 말고
  //     firebaseStorage.ref(`${uid}`).child(upLoadFile.name).getDownloadURL()
  //      .then(fireBaseUrl => {
  //       setShowImg(prevObject => ({...prevObject, imgUrl: fireBaseUrl}))
  //      })
  //   })
};

export default uploadData;
