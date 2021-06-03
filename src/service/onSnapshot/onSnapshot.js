import {firebaseStore,firebaseAuth} from "../firebase";

const onSnapshot = (setIsFollowing) => {
  const currentUserUid = firebaseAuth.currentUser.uid;
  const follower = firebaseStore.collection("follow").doc(currentUserUid);
  const userUid = [];

  
  follower.onSnapshot((doc) => {
    //console.log('current follower',doc.data().follower);
    userUid.push(...doc.data().following);
    console.log(userUid)
  });
  setIsFollowing(userUid);
  
} 

export default onSnapshot;
