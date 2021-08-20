import { firebaseMessaging, firebaseStore, firebaseAuth } from "../firebase";

const saveMessagingDeviceToken = () => {
  firebaseMessaging
    .getToken({
      vapidKey:
        "BGmrFSxEHeW3NEGKA0SjMgIo5goQDUOYA6tUt3JlPBiK8L1PW4PAL-AlLVjv56_9TYCzuy0TtcBjftzAHiJqZAY",
    })
    .then(function (currentToken) {
      if (currentToken) {
        console.log("Got FCM device token:", currentToken);
        // Saving the Device Token to the datastore.
        firebaseStore
          .collection("fcmTokens")
          .doc(firebaseAuth.currentUser.uid)
          .set({
            uid: firebaseAuth.currentUser.uid,
            displayName: firebaseAuth.currentUser.displayName,
            currentToken,
          });
      } else {
        // Need to request permissions to show notifications.
        saveMessagingDeviceToken();
        console.log("sorry");
      }
    })
    .catch(function (error) {
      console.error("Unable to get messaging token.", error);
    });
};

export default saveMessagingDeviceToken;
