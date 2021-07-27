import axios from "axios";

const sendMessage = () => {
  const result = axios({
    url: "https://content-fcm.googleapis.com/v1/projects/477003740312/messages:send?",
    method: "post",
    headers: {
      Authorization:
        "Bearer key",
      Accept: "application/json",
      "content-type": "application/json",
    },
    message: {
      token:
        "token",
      notification: {
        title: "you got a message",
        body: "hello yong men",
      },
      webpush: {
        fcm_options: {
          link: "https://dummypage.com",
        },
      },
    },
  });
  console.log(result);
};
export default sendMessage;
