import { firebaseAuth, firebaseStore } from '../firebase'
import getUserDataUseDisplayName from '../usersData/getUsersDataUseDisplayName'

const getMessageRoom = async (setChatRooms) => {
  const currentUserDisplayName = firebaseAuth.currentUser.displayName
  const rule = []
  const rooms = await firebaseStore
    .collection('chatRooms')
    .where('displayName', 'array-contains', currentUserDisplayName)
    .get()

  // rooms.forEach((user) => setChatRooms(user.data().displayName))
  rooms.docs.map((data) => rule.push(data.data().displayName))
  getUserDataUseDisplayName(...rule, setChatRooms)
}

export default getMessageRoom
