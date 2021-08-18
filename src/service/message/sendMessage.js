import { firebaseAuth, firebaseStore } from "../firebase";

const sendMessage = async (text, clickedRoomId) => {
  const uid = firebaseAuth.currentUser.uid;
  const photoURL = firebaseAuth.currentUser.photoURL;
  const time = Date.now();

  await firebaseStore
    .collection("chatRooms")
    .doc(clickedRoomId)
    .collection("message")
    .doc()
    .set({
      text,
      uid,
      time,
      photoURL,
    });
};

export default sendMessage;
