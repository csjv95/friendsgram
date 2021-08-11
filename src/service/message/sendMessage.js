import { firebaseAuth, firebaseStore } from '../firebase'

const sendMessage = async (text, clickedRoomId) => {
  const uid = firebaseAuth.currentUser.uid
  const time = Date.now()

  await firebaseStore
    .collection('chatRooms')
    .doc(clickedRoomId)
    .collection('message')
    .doc()
    .set({
      text,
      uid,
      time,
    })
}

export default sendMessage
