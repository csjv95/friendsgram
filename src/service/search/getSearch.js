import { firebaseStore } from "../firebase";

export const getSearch = async (searchText, setRecomendUser) => {
  const firebaseUserList = firebaseStore.collection("users");
  const re = new RegExp(`^${searchText}`);
  const allUserList = [];
  const selectedUser = [];
  const finallList = [];

  await firebaseUserList.get().then((user) => {
    user.forEach((doc) => {
      allUserList.push(doc.data().displayName);
    });
  });

  allUserList.forEach(
    (user) => user.includes(searchText) && selectedUser.push(user)
  );
  
  selectedUser.forEach((user) => re.test(user) && finallList.push(user));
  // setRecomendUser([...new Set(finallList.sort().concat(selectedUser.sort()))]);
  setRecomendUser([...new Set([...finallList.sort(),...selectedUser.sort()])]);
};
