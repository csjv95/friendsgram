import React, { useEffect } from "react";
import Direct from "../componet/Direct/Direct";
import { useDispatch, useSelector } from "react-redux";
import { changeSendModalState } from "../redux/modules/modals/modalState";
import getCurrentUserData from "../service/fireStore/getCurrentUserData";
import { authGetUid } from "../service/auth/authGetUid";

const ContainerDirect = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const GET_USER_DATA_SUCCESS = "userData/GET_USER_DATA_SUCCESS";
    const CURRENTUID = "getUid/CURRENTUID";

    getCurrentUserData(dispatch, GET_USER_DATA_SUCCESS);
    authGetUid(dispatch, CURRENTUID);
  }, [dispatch]);

  const currentUserUid = useSelector(
    (state) => state.currentUserUid.currentUserUid
  );
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
