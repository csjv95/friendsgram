import React, { useEffect } from "react";
import Direct from "../componet/Direct/Direct";
import { useDispatch, useSelector } from "react-redux";
import { changeSendModalState } from "../redux/modules/modals/modalState";
import getCurrentUserData from "../service/fireStore/getCurrentUserData";

const ContainerDirect = ({ currentUserUid }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const GET_USER_DATA_SUCCESS = "userData/GET_USER_DATA_SUCCESS";
    getCurrentUserData(dispatch, GET_USER_DATA_SUCCESS);
  }, [dispatch]);
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
