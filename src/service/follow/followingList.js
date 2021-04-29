import {firebaseStore} from "../firebase";
import {firebaseAuth} from "../firebase";


const followingList = async () => {
  // follow에 현제 uid follwing [] 가져오기
  const currentUserUid = firebaseAuth.currentUser.uid;
  const followingData = firebaseStore.collection("follow").where("uid", "==", currentUserUid);
  const following = []
  await followingData
  .get()
  .then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      following.push(doc.data().following);
    });
  })
  console.log(following)
 
}

export default followingList;