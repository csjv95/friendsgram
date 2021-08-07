import { firebaseStore } from '../firebase'

const getMessageRoomUser = async (users, setChatRooms) => {
  const usersArr = users.map(async (user) => {
    const data = []
    const displayName = firebaseStore
      .collection('users')
      .where('displayName', '==', user.name[0])
      .get()

    ;(await displayName).docs.forEach((doc) =>
      data.push([doc.data(), { roomId: user.roomId }]),
    )
    return data
  })

  const promiseAll = await Promise.all(usersArr)
  const result = promiseAll.flatMap((p) => p)

  setChatRooms(result)
}

export default getMessageRoomUser
