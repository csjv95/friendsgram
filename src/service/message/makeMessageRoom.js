import { firebase, firebaseAuth, firebaseStore } from "../firebase";

const makeMessageRoom = async (checkUser, roomId) => {
  const currentUserDisplayName = firebaseAuth.currentUser.displayName;

  checkUser.map(async (user) => {
    await firebaseStore.collection("chatRooms").doc(roomId).set({
      roomId,
    });

    await firebaseStore
      .collection("chatRooms")
      .doc(roomId)
      .update({
        displayNames: firebase.firestore.FieldValue.arrayUnion(
          currentUserDisplayName,
          user
        ),
      });
  });
};
export default makeMessageRoom;

// https://firebase.google.com/codelabs/firebase-web?hl=ko#7
// 메시지 룸 까지 만들었음 가져오는 뷰단 만들기!!
