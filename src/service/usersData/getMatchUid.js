import { firebaseStore } from "../firebase";

const getMatchDisplayName = async (match, setMatchUser) => {
  const matchUser = [];
  const user = firebaseStore
    .collection("users")
    .where("uid", "==", match);

  await user
    .get()
    .then((user) => user.forEach((data) => matchUser.push(data.data())));

  setMatchUser(...matchUser);
};

export default getMatchDisplayName;
