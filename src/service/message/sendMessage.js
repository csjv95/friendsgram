import { firebaseMessaging } from "../firebase";

const sendMessage = async (message, setToken, setText) => {
  const getToken = await firebaseMessaging.getToken({
    vapidKey: process.env.REACT_APP_FIREBASE_MESSAGEING_TOKEN,
  });

  if (getToken) {
    setToken(getToken);
  } else {
    console.log(
      "No registration token available. Request permission to generate one."
    );
  }
  //ajax 클라이언트단 node로 집적 통신 하면 괜찮아진다
  const request = require("request");
  const options = {
    uri: "https://fcm.googleapis.com/fcm/send",
    method: "POST",
    headers: {
      "content-type": "application/json",
      Authorization: process.env.REACT_APP_FIREBASE_MESSAGEING_KEY,
    },
    json: {
      to: getToken,
      notification: {
        title: "you got a new massage",
        message,
      },
    },
  };
  request.post(options, (err, httpResponse, body, request) => {
    const time = new Date(httpResponse.headers.date); //메세지 gmt를 한국시간으로 바꾸기
    const message = JSON.parse(httpResponse.request.body);
    console.log("----------header input test-------------");
    // console.log(httpResponse);
    console.log("token", getToken);
    setText(getToken);
    console.log("id", body.multicast_id); // 메세지 아이디
    console.log("time", time); //메시지 시간
    console.log("message", message.notification.message); // 메시지 내용
  });
};
export default sendMessage;

// 내가 할일
// fcm token은 새로운 디바이스 환경에 따라 바뀐다

// 알람을 받기 위해서 토큰이 필요

// 그 유저를 선택하면 그 유저의 토큰을 받아 와야한다

// 하지만 그유저가 핸드폰에서 웹에서 접근할때마다 token은 달라진다
// 그리고 다른아이디로 로그인해도 그 토큰값이 같다 (check)

// ? 결론 접속을 할떄마다 새로운 토큰을 받는다 그럼(새로운 값을 받기전 토큰을 가진 유저는 기존에다가 보낸다)

// collection("messages").doc(postId).collection("messages").doc(messageId)

// user1 uid

// room id uid1 uid2
// room id uid1 ui3
