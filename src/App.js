import { useCallback, useEffect, useState } from "react";
import "./App.css";
import FacebookLogin from "./componet/FacebookLogin";
import { firestore } from "./service/firebase";

function App() {
  let [tasksData, setTaskData] = useState([]);

  const fetchData = useCallback(() => {
    let tasksData = [];
    firestore
      .collection("my")
      .get()
      .then((docs) => {
        docs.forEach((doc) => {
          tasksData.push({ name: doc.data().name, age: doc.data().age, sexy: doc.data().sexy});
        });
        setTaskData((preTasks) => preTasks.concat(tasksData));
      });
  },[]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <>
      <FacebookLogin />
      {console.log(tasksData)};
    </>
  );
}

export default App;
