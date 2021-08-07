import { firebaseStore } from '../firebase'

const getMessageRoomId = async (users) => {
  // includes(users) ?
  const roomId = await firebaseStore
    .collection('chatRooms')
    .where('displayNames', 'array-contains', users)
    .get()

  const id = roomId.doc().id
  console.log(id)
}

export default getMessageRoomId
