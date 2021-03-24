import { firebasestore } from "./firebase";

const checkUser = (userLoginData,setLogin) => {
  const { id:userid, pw: userpw } = userLoginData;
  console.log(userid,userpw);
  const data = [];
  const user = firebasestore
    .collection("users")
    .get()
    .then((querySnapshot) => {
      console.log(querySnapshot);
      querySnapshot.forEach((doc) => {
        console.log(doc.data().email);
        console.log(typeof userpw);
        if (doc.data().email === userid && doc.data().password === userpw) {
          data.push(doc.data());
          setLogin(true);
        }else {
          alert('아이디 또는 비밀번호를 다시 확인해주세요');
        }
      });
    });
    console.log(user);
};

export default checkUser;
