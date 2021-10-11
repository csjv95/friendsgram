import React, { useEffect, useState } from "react";
import ClickedPost from "../../componet/ClickedPost/ClickedPost";
import getPostUsePostId from "../../service/postData/getPostUsePostId";
import { useDispatch, useSelector } from "react-redux";
import getUserImg from "../../service/usersData/getUserImg";
import LoadingSpinner from "../../Global/Loading/LoadingSpinner";

const ContainerClickedPost = ({ postId }) => {
  const dispatch = useDispatch();
  const [photoURL, setPhotoURL] = useState("");

  const { postData, loading } = useSelector((state) => state.postData.postData);

  useEffect(() => {
    getPostUsePostId(postId, dispatch);
  }, [postId, dispatch]);

  if (loading) return <LoadingSpinner />;

  return <ClickedPost post={postData} photoURL={photoURL} />;
};

export default ContainerClickedPost;
