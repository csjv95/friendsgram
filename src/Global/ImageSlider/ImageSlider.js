import React, { useRef, useState } from "react";
import styled from "styled-components";
import Empty from "../Empty/Empty";
import { StDotFill, StLeftArrow, StRightArrow } from "../StIcon/StIcon";
import { Theme } from "../../style/Theme";
import LoadingPage from "../Loading/LoadingPage";

const ImageWraper = styled.section`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
`;

const ImageList = styled.ul`
  display: flex;
  transition: all 300ms ease-out;
`;

const ImageItem = styled.li`
  min-width: 100%;
  /* min-height: 100%; */
  max-height: 40em;
`;

const Image = styled.img`
  max-width: 100%;
  min-height: 100%;
`;

const BtnCotainer = styled.div`
  position: relative;
  width: 100%;
  padding: 0 1em;
  position: absolute;
  top: 50%;
  z-index: 1;
`;

const BtnBack = styled.button`
  position: absolute;
  border: 1px solid lightgray;
  border-radius: 50%;
  background-color: white;
`;

const BtnNext = styled.button`
  position: absolute;
  right: 1.5em;
  border: 1px solid lightgray;
  border-radius: 50%;
  background-color: white;
`;

const StImgNav = styled.ul`
  display: flex;
  justify-content: center;
`;

const ImageSlider = ({ imgs }) => {
  const ImgRef = useRef();
  const [imgIndex, setImgIndex] = useState(0);

  const backImg = () => {
    ImgRef.current.style.transform = `translateX(${-100 * (imgIndex - 1)}%)`;
    setImgIndex(imgIndex - 1);
  };

  const nextImg = () => {
    ImgRef.current.style.transform = `translateX(${-100 * (imgIndex + 1)}%)`;
    setImgIndex(imgIndex + 1);
  };

  const toGoImg = (index) => {
    ImgRef.current.style.transform = `translateX(${-100 * index}%)`;
    setImgIndex(index);
  };

  if (!imgs) return <LoadingPage />;
  return (
    <>
      <ImageWraper>
        <BtnCotainer>
          {imgIndex === 0 ? (
            <Empty />
          ) : (
            <BtnBack onClick={backImg}>
              <StLeftArrow width="1.5" color="lightgrey" />
            </BtnBack>
          )}
          {imgIndex === imgs.length - 1 || imgIndex === imgs.length ? (
            <Empty />
          ) : (
            <BtnNext onClick={nextImg}>
              <StRightArrow width="1.5" color="lightgrey" />
            </BtnNext>
          )}
        </BtnCotainer>

        <ImageList ref={ImgRef}>
          {imgs.map((img, index) => (
            <ImageItem key={index}>
              <Image src={img.imgUrl} alt="pic" />
            </ImageItem>
          ))}
        </ImageList>
      </ImageWraper>

      {imgs.length > 1 ? (
        <StImgNav>
          {imgs.map((img, index) => (
            <li key={index}>
              <button onClick={() => toGoImg(index)}>
                <StDotFill
                  width="1.5em"
                  color={
                    imgIndex === index
                      ? Theme.colors.blueviolet
                      : Theme.colors.lightgrey
                  }
                />
              </button>
            </li>
          ))}
        </StImgNav>
      ) : (
        <Empty />
      )}
    </>
  );
};

export default ImageSlider;
