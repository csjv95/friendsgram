import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Edit from "../componet/Edit/Edit";
import LoadingPage from "../Global/Loading/LoadingPage";
import getCurrentUserData from "../service/fireStore/getCurrentUserData";

const ContainerEdit = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const GET_USER_DATA_SUCCESS = "userData/GET_USER_DATA_SUCCESS";

    getCurrentUserData(dispatch, GET_USER_DATA_SUCCESS);
  }, [dispatch]);

  const {
    data: userData,
    loading,
    error,
  } = useSelector((state) => state.userData.userData);

  if (loading) return <LoadingPage />;
  if (error) return <div>{error}</div>;
  return <Edit userData={userData} />;
};

export default ContainerEdit;
