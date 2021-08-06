import { firebaseAuth, firebaseStore } from '../firebase'
import getUserDataUseDisplayName from '../usersData/getUsersDataUseDisplayName'

const getMessageRoom = async (setChatRooms) => {
  const currentUserDisplayName = firebaseAuth.currentUser.displayName

  const rooms = firebaseStore
    .collection('chatRooms')
    .where('displayNames', 'array-contains', currentUserDisplayName)
    .onSnapshot((doc) => {
      const result = []
      doc.forEach((names) =>
        result.push(
          names
            .data()
            .displayNames.filter((name) => name !== currentUserDisplayName),
        ),
      )
      getUserDataUseDisplayName(setChatRooms, result)
    })

  return () => {
    rooms()
  }
}

export default getMessageRoom
