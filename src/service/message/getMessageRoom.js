import { firebaseAuth, firebaseStore } from '../firebase'
import getMessageRoomUser from './getMessageRoomUsers'

const getMessageRoom = async (setChatRooms) => {
  const currentUserDisplayName = firebaseAuth.currentUser.displayName

  const rooms = firebaseStore
    .collection('chatRooms')
    .where('displayNames', 'array-contains', currentUserDisplayName)
    .onSnapshot((doc) => {
      const result = []
      const solve = []
      doc.forEach((names) =>
        solve.push({
          name: names
            .data()
            .displayNames.filter((name) => name !== currentUserDisplayName),
          roomId: names.data().roomId,
        }),
      )
      solve.map((re) => result.push(re))
      getMessageRoomUser(result, setChatRooms)
    })

  return () => {
    rooms()
  }
}

export default getMessageRoom
