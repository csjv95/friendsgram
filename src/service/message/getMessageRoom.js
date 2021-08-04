import { firebaseAuth, firebaseStore } from '../firebase'
import getUserDataUseDisplayName from '../usersData/getUsersDataUseDisplayName'

const getMessageRoom = async (setChatRooms) => {
  const currentUserDisplayName = firebaseAuth.currentUser.displayName
  const result = []
  const rooms = firebaseStore
    .collection('chatRooms')
    .where('displayNames', 'array-contains', currentUserDisplayName)
    .onSnapshot((qurySnapshot) => {
      const rule = []
      qurySnapshot.forEach((doc) => {
        rule.push(
          doc
            .data()
            .displayNames.filter((name) => name !== currentUserDisplayName),
        )
      })
      result.push(rule.flatMap((re) => re))
    })
  // console.log(result)
  getUserDataUseDisplayName(setChatRooms, result)
}

export default getMessageRoom
// .get()
