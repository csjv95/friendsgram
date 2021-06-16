import React, { useEffect, useState } from "react";
import getBookMarkPost from "../../service/bookMark/getBookMarkPost";
import {
  StPostList,
  StPostItem,
  StPostButton,
  StPostImg,
} from "../../Global/StMyProfileRoute/StMyProfileRoute";
import { StImageMultiple } from "../../Global/StIcon/StIcon";

const Saved = ({ bookMarkPost }) => {
  return (
    <StPostList>
    {bookMarkPost.map((data) => (
      <StPostItem
        key={data.postId}
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
  </StPostList>

  );
};

export default Saved;
