const sendMessage = (message, token) => {
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
      to: token,
      notification: {
        title: "you got a new massage",
        message,
      },
    },
  };
  request.post(options, function (err, httpResponse, body, request) {
    const time = new Date(httpResponse.headers.date); //메세지 gmt를 한국시간으로 바꾸기
    const message = JSON.parse(httpResponse.request.body);
    console.log("----------header input test-------------");
    // console.log(httpResponse);
    console.log("id", body.multicast_id); // 메세지 아이디
    console.log("time", time); //메시지 시간
    console.log("message", message.notification.message); //
  });
};
export default sendMessage;
