import { firebaseStore } from '../firebase'

const setMessageRoomId = (setRoomId) => {
  const roomId = firebaseStore.collection('chatRooms').doc().id
  setRoomId(roomId)
}

export default setMessageRoomId
