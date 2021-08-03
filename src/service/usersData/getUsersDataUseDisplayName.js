import { firebaseStore } from '../firebase'
const getUserDataUseDisplayName = async (setData, users) => {
  const usersArr = users.map(async (user) => {
    const data = []
    const displayNames = firebaseStore
      .collection('users')
      .where('displayName', '==', user)
      .get()

    ;(await displayNames).docs.forEach((doc) => data.push(doc.data()))
    return data
  })

  const promiseAll = await Promise.all(usersArr)
  const result = promiseAll.flatMap((p) => p)
  setData(result)
}

export default getUserDataUseDisplayName
