import React from "react";
import PostCol from "../../componet/Home/PostCol";

const ContainerPostCol = ({
  article,
  followingList,
  setClickedPostId,
  setClickedPostUid,
  handlePostMenu,
  changeSendModal,
}) => {
  return (
    <PostCol
      article={article}
      followingList={followingList}
      setClickedPostId={setClickedPostId}
      setClickedPostUid={setClickedPostUid}
      handlePostMenu={handlePostMenu}
      handleSend={changeSendModal}
    />
  );
};

export default ContainerPostCol;
