import React, { useCallback, useEffect, useState } from "react";
import { firebaseStore } from "../service/firebase";
const FacebookLogin = () => {
  let [tasksData, setTaskData] = useState([]);

  const fetchData = useCallback(() => {
    let tasksData = [];
    firebaseStore
      .collection("my")
      .get()
      .then((docs) => {
        docs.forEach((doc) => {
          tasksData.push({
            name: doc.data().name,
            age: doc.data().age,
            sexy: doc.data().sexy,
          });
        });
        setTaskData((preTasks) => preTasks.concat(tasksData));
      });
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);
  return (
    <div
      className="fb-login-button"
      data-width=""
      data-size="large"
      data-button-type="continue_with"
      data-layout="default"
      data-auto-logout-link="true"
      data-use-continue-as="true"
    >
      {console.log(tasksData)};
    </div>
  );
};

export default FacebookLogin;
