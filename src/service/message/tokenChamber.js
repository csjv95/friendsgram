import { firebaseStore, firebaseAuth } from "../firebase";

const tokenChamber = async (roomId, setToken) => {
  const currentDisplayName = firebaseAuth.currentUser.displayName;
  const users = (
    await firebaseStore.collection("chatRooms").doc(roomId).get()
  ).data().displayNames;
  const displayNames = await users.filter((e) => e !== currentDisplayName);

  const tokens = displayNames.map((name) =>
    firebaseStore
      .collection("fcmTokens")
      .where("displayName", "==", name)
      .onSnapshot((room) =>
        room.forEach((item) => setToken(item.data().currentToken))
      )
  );

  return () => {
    tokens();
  };
};

export default tokenChamber;
