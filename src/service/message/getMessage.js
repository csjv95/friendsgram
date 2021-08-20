import { firebaseStore } from "../firebase";

const getMessage = (clickedRoomId, setView) => {
  const message = firebaseStore
    .collection("chatRooms")
    .doc(clickedRoomId)
    .collection("message")
    .orderBy("time", "desc")
    .limit(20)
    .onSnapshot((messages) => {
      const texts = [].flatMap((e) => e);
      messages.docs.forEach((chat) => {
        texts.push(chat.data());
      });
      setView(texts.reverse());
    });

  return () => {
    message();
  };
};

export default getMessage;
