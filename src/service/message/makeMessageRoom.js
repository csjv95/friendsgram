import { firebase, firebaseAuth, firebaseStore } from '../firebase'

const makeMessageRoom = async (checkUser, roomId) => {
  const currentUserDisplayName = firebaseAuth.currentUser.displayName
  const checkUsers = checkUser.toString() // 이미 배열이여서 문자로 바꿔줘야함
  await firebaseStore
    .collection('chatRooms')
    .doc(roomId)
    .set({
      roomId,
      displayNames: firebase.firestore.FieldValue.arrayUnion(
        currentUserDisplayName,
        checkUsers,
      ),
    })
}
export default makeMessageRoom

// https://firebase.google.com/codelabs/firebase-web?hl=ko#7
// 메시지 룸 까지 만들었음 가져오는 뷰단 만들기!!
