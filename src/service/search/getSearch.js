import { firebaseStore } from "../firebase";

export const getSearch = async (searchText) => {
  const firebaseUserList = firebaseStore.collection("users");
  const allUserList = [];
  const selectedUser = []

  await firebaseUserList.get().then((user) => {
    user.forEach((doc) => {
      allUserList.push(doc.data().displayName);
    });
  });

  const inculdeText = allUserList.filter(async (user) =>
    await user.includes(searchText) && selectedUser.push(user)
  );

  console.log(selectedUser);
  inculdeText.map(async item => console.log(await item))
};
