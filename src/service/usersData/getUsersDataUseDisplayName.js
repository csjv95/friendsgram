import { firebaseStore } from '../firebase'
const getUserDataUseDisplayName = async (setData, users) => {
  console.log(...users)
  const displayNames = await users.flatMap((name) => name)
  const usersArr = displayNames.map(async (user) => {
    const data = []
    const displayName = firebaseStore
      .collection('users')
      .where('displayName', '==', user)
      .get()

    ;(await displayName).docs.forEach((doc) => data.push(doc.data()))
    return data
  })

  const promiseAll = await Promise.all(usersArr)
  const result = promiseAll.flatMap((p) => p)
  setData(result)
}

export default getUserDataUseDisplayName
