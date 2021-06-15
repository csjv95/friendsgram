import {firebaseStore} from "../firebase";

const getBookMark = (postId,setBookMarkData) => {
  const bookMark = firebaseStore.collection("bookMark").doc(postId);

  bookMark.onSnapshot((bookMark) => {
    setBookMarkData(bookMark.data().uid);
  })
}

export default getBookMark;