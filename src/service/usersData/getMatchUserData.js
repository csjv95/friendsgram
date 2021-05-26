import { firebaseStore } from "../firebase";

const getMatchUserData = async (match, setMatchUser) => {
  const matchUser = [];

  const user = firebaseStore
    .collection("users")
    .where("displayName", "==", match.username);

  await user
    .get()
    .then((user) => user.forEach((data) => matchUser.push(data.data())));

  setMatchUser(...matchUser);
};

export default getMatchUserData;
