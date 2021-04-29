import {firebaseStore} from "../firebase";
import {firebaseAuth} from "../firebase";


const followerList = async () => {
  // follow에 현제 uid follwing [] 가져오기
  const currentUserUid = firebaseAuth.currentUser.uid;
  const followerData = firebaseStore.collection("follow").where("uid", "==", currentUserUid);
  const follower = []
  await followerData
  .get()
  .then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      follower.push(doc.data().follower);
    });
  })
  console.log(follower)
 
}

export default followerList;