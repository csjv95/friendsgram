import { firebaseAuth, firebaseStore } from '../firebase'
import getUserDataUseDisplayName from '../usersData/getUsersDataUseDisplayName'

const getMessageRoom = async (setChatRooms) => {
  const currentUserDisplayName = firebaseAuth.currentUser.displayName
  const rule = []
  const rooms = await firebaseStore
    .collection('chatRooms')
    .where('displayNames', 'array-contains', currentUserDisplayName)
    .get()

  rooms.docs.map((datas) =>
    rule.push(
      datas
        .data()
        .displayNames.filter((name) => name !== currentUserDisplayName),
    ),
  )
  getUserDataUseDisplayName(setChatRooms, ...rule)
}

export default getMessageRoom
