import { firebaseStore } from "../firebase";

const getMessageRoomId = async (users) => {
  await firebaseStore
    .collection("chatRooms")
    .where("displayNames", "array-contains", users)
    .get();
};

export default getMessageRoomId;
