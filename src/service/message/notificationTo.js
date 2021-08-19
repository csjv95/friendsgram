import { firebaseAuth } from "../firebase";

const notificationTo = (message) => {
  const request = require("request");
  const options = {
    uri: "https://fcm.googleapis.com/fcm/send",
    method: "POST",
    headers: {
      "content-type": "application/json",
      Authorization: process.env.REACT_APP_FIREBASE_MESSAGEING_KEY,
    },
    json: {
      to: "c9uisua_Arko542k7eseX1:APA91bG2Rg7UMX4SmWB0ZmO1BV5r-s_WnmkPKQI7A8SRT46xoeO2xWmjdJTdlVWK-1oYxo4yHE2BDniMc6_zmd1voUvH3QVTO5mimgG2vaMsreS1ysGxhomsUSNxVG671dJHxGnAJjxv",
      notification: {
        title: "you got a new massage",
        body: message,
        auth: firebaseAuth.currentUser.displayName,
        icon: firebaseAuth.currentUser.photoURL,
        click_action: "http://localhost:3000", //"https://instargram-graph.web.app"
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
