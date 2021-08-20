import { firebaseAuth } from "../firebase";

const notificationTo = (message, token, displayName) => {
  const request = require("request");
  const options = {
    uri: "https://fcm.googleapis.com/fcm/send",
    method: "POST",
    headers: {
      "content-type": "application/json",
      Authorization: process.env.REACT_APP_FIREBASE_MESSAGEING_KEY,
    },
    json: {
      to: token,
      notification: {
        title: displayName,
        body: message,
        auth: firebaseAuth.currentUser.displayName,
        icon: firebaseAuth.currentUser.photoURL,
        click_action: "https://instargram-graph.web.app",
      },
    },
  };
  request.post(options, (err, httpResponse, body, request) => {
    //   const time = new Date(httpResponse.headers.date); //메세지 gmt를 한국시간으로 바꾸기
    //   const message = JSON.parse(httpResponse.request.body);
    //   console.log("----------header input test-------------");
    //   console.log(httpResponse);
    //   // console.log("token", getToken);
    //   // setText(getToken);
    //   console.log("id", body.multicast_id); // 메세지 아이디
    //   console.log("time", time); //메시지 시간
    //   console.log("message", message.notification.message); // 메시지 내용
  });
};

export default notificationTo;
