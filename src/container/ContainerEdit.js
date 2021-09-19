import React from "react";
import { useSelector } from "react-redux";
import Edit from "../componet/Edit/Edit";
import LoadingPage from "../Global/Loading/LoadingPage";

const ContainerEdit = () => {
  // routeMain에서 하지말고 여기서 하기
  // useEffect(() => {
  //   const getUserData = () => dispatch(getUserDataAsync());

  //   return () => {
  //     getUserData();
  //   };
  // }, [dispatch]);

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
