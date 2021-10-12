import React, { useState } from "react";
import {
  StPostList,
  StPostItem,
  StPostButton,
  StPostImg,
} from "../../Global/StMyProfileRoute/StMyProfileRoute";
import { StImageMultiple } from "../../Global/StIcon/StIcon";
import ModalPotal from "../../modal/ModalPotal";
import Post from "../Post/Post";
import { useMediaQuery } from "react-responsive";
import { useHistory } from "react-router";

const Saved = ({
  handlePost,
  postModal,
  post,
  currentUserUid,
  bookMarkPosts,
  handlePostMenu,
  setClickedPostId,
  setClickedPostUid,
  handleSend,
}) => {
  const [postId, setPostId] = useState([]);
  const history = useHistory();

  const responsive = useMediaQuery({
    query: "(max-width:1024px)",
  });

  return (
    <StPostList>
      {bookMarkPosts &&
        bookMarkPosts.map((data, postId) => (
          <StPostItem
            key={postId}
            onClick={() => {
              handlePost();
              setPostId(postId);
              responsive &&
                history.push({
                  pathname: `/post/${data.postId}`,
                });
            }}
          >
            <StPostButton>
              <StPostImg src={data.imgsData[0].imgUrl} alt="my post" />
            </StPostButton>
            {data.imgsData.length > 1 && (
              <StImageMultiple
                width="1.4"
                color="white"
                position="absolute"
                top="14"
                right="14"
              />
            )}
          </StPostItem>
        ))}
      {postModal && (
        <ModalPotal potalName={post}>
          <Post
            handlePost={handlePost}
            content={bookMarkPosts}
            postId={postId}
            currentUserUid={currentUserUid}
            handlePostMenu={handlePostMenu}
            setClickedPostId={setClickedPostId}
            setClickedPostUid={setClickedPostUid}
            handleSend={handleSend}
          />
        </ModalPotal>
      )}
    </StPostList>
  );
};

export default Saved;
