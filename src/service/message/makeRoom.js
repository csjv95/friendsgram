import { firebaseStore } from '../firebase'

const makeRoom = async (checkUser, roomId) => {
  await firebaseStore
    .collection('chatRooms')
    .doc(roomId)
    .set({ uids: checkUser })
}

export default makeRoom
