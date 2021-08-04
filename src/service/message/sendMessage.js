import { firebaseStore } from '../firebase'

const sendMessage = (text) => {
  firebaseStore.collection('chatRooms')
}

export default sendMessage
