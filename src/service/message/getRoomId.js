import { firebaseStore } from "../firebase";

export const getRoomId = (setRoomId) => {
  const roomId = firebaseStore.collection("chatRooms").doc().id;
  setRoomId(roomId);
};
