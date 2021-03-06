import { firebaseAuth, firebaseStore } from "../firebase";
import notificationTo from "./notificationTo";

const sendMessage = async (text, clickedRoomId, token) => {
  const uid = firebaseAuth.currentUser.uid;
  const displayName = firebaseAuth.currentUser.displayName;
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
      clickedRoomId,
    });

  notificationTo(text, token, displayName, clickedRoomId);
};

export default sendMessage;
