import {firebaseStore} from "../firebase"

export const getSearch = async (headerText) => {
  const firebaseUserList = firebaseStore.collection("users")
  const allUserList = [];

  await firebaseUserList.get().then(user => {
    user.forEach(doc => {
      allUserList.push(doc.data().displayName);
    })
  })
  
  const inculdeText = allUserList.filter(user => user.includes(headerText))
  console.log(allUserList);
  console.log(inculdeText);

}