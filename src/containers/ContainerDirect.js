import React from "react";
import Direct from "../componet/Direct/Direct";
import { useDispatch, useSelector } from "react-redux";
import { changeSendModalState } from "../redux/modules/modalState";

const ContainerDirect = ({ currentUserUid }) => {
  const dispatch = useDispatch();

  const userData = useSelector((state) => state.userData.userData.data);
  const changeSendModal = () => dispatch(changeSendModalState());

  return (
    <Direct
      userData={userData}
      changeSendModal={changeSendModal}
      currentUserUid={currentUserUid}
    />
  );
};

export default ContainerDirect;
