import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Empty from "../Empty/Empty";
import PostRow from "../PostRow/PostRow";
import { StArrowLeft, StArrowRight } from "../../Global/StIcon/StIcon";
import { StModalMain, StModalBtn } from "../../Global/StModal/StModal";
import { Theme } from "../../style/Theme";

const StCarouselContainer = styled.div`
  position: relative;
  width: 60em;
  height: 37em;
`;

const StCarouselSection = styled.section`
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

const StCarouselList = styled.ul`
  width: 100%;
  height: 100%;
  display: flex;
`;

const StCarouselItem = styled.li`
  width: 100%;
  height: 100%;
`;

const ContentCarousel = ({
  content,
  postId,
  currentUserUid,
  handlePostMenu,
  setClickedPostId,
  setClickedPostUid,
}) => {
  const [curContent, setCurContent] = useState(0);
  const contentRef = useRef();

  const backContent = () => {
    contentRef.current.style.transform = `translateX(${
      -100 * (curContent - 1)
    }%)`;
    setCurContent(curContent - 1);
  };

  const nextContent = () => {
    contentRef.current.style.transform = `translateX(${
      -100 * (curContent + 1)
    }%)`;
    setCurContent(curContent + 1);
  };

  useEffect(() => {
    const ClickContent = () => {
      contentRef.current.style.transform = `translateX(${-100 * postId}%)`;
      setCurContent(postId);
    };
    ClickContent();
  }, [postId]);

  return (
    <StCarouselContainer>
      <StCarouselSection>
        <StCarouselList ref={contentRef}>
          {content &&
            content.map((content) => (
              <StCarouselItem key={content.postId}>
                <StModalMain width="60em" height="37em" display="flex">
                  <PostRow
                    post={content}
                    currentUserUid={currentUserUid}
                    handlePostMenu={handlePostMenu}
                    setClickedPostId={setClickedPostId}
                    setClickedPostUid={setClickedPostUid}
                  />
                </StModalMain>
              </StCarouselItem>
            ))}
        </StCarouselList>
      </StCarouselSection>

      {curContent === 0 ? (
        <Empty />
      ) : (
        <StModalBtn
          position="absolute"
          top="23em"
          left="-3em"
          onClick={backContent}
        >
          <StArrowLeft width="3em" color={Theme.colors.borderColor} />
        </StModalBtn>
      )}
      {curContent === content.length - 1 ? (
        <Empty />
      ) : (
        <StModalBtn
          position="absolute"
          top="23em"
          right="-3em"
          onClick={nextContent}
        >
          <StArrowRight width="3em" color={Theme.colors.borderColor} />
        </StModalBtn>
      )}
    </StCarouselContainer>
  );
};

export default ContentCarousel;
