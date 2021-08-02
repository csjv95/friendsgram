import { firebaseStore } from '../firebase'

const getMessageRoomId = (setRoomId) => {
  const roomId = firebaseStore.collection('chatRooms').doc().id
  setRoomId(roomId)
}

export default getMessageRoomId
