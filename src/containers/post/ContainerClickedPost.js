import React, { useEffect, useState } from "react";
import ClickedPost from "../../componet/ClickedPost/ClickedPost";
import getPostUsePostId from "../../service/postData/getPostUsePostId";
import { useDispatch, useSelector } from "react-redux";
import LoadingSpinner from "../../Global/Loading/LoadingSpinner";

const ContainerClickedPost = ({ postId }) => {
  const dispatch = useDispatch();

  const post = useSelector((state) => state.postData.post);

  useEffect(() => {
    getPostUsePostId(postId, dispatch);
  }, [postId, dispatch]);

  return <ClickedPost post={post} />;
};

export default ContainerClickedPost;
