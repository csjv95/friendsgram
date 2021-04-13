import React, { useRef, useState } from "react";
import styled from "styled-components";
import { StLeftArrow, StRightArrow } from "../../Global/StIcon/StIcon";

const ImageWraper = styled.section`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

const ImageList = styled.ul`
  display: flex;
  transition: all 300ms ease-out;
`;

const ImageItem = styled.li`
  min-width: 100%;
  min-height: 100%;
`;

const ImgWrapper = styled.div`
  width : 100%;
  height : 100%;
`

const Image = styled.img`
  max-width:100%;
  max-height: 100%;
`;

const BtnCotainer = styled.div`
  width: 100%;
  padding: 0 1em;
  position: absolute;
  top: 50%;
  display: flex;
  justify-content: space-between;
  z-index: 1;
`;

const Btn = styled.button`
  border: 1px solid lightgray;
  border-radius: 50%;
  background-color: white;
`;

const ImageSlider = ({imgs}) => {
  const ImgRef = useRef();
  const [imgIndex, setImgIndex] = useState(0);

  const backClick = () => {
    console.log("back");
    ImgRef.current.style.transform = `translateX(${-100 * (imgIndex - 1)}%)`;
    setImgIndex(imgIndex - 1);
  };

  const nextClick = () => {
    console.log("next");
    ImgRef.current.style.transform = `translateX(${-100 * (imgIndex + 1)}%)`;
    setImgIndex(imgIndex + 1);
  };

  return (
    <>
      <ImageWraper>
        <BtnCotainer>
          <Btn onClick={backClick}>
            <StLeftArrow width="1.5" color="lightgrey" />
          </Btn>
          <Btn onClick={nextClick}>
            <StRightArrow width="1.5" color="lightgrey" />
          </Btn>
        </BtnCotainer>
        <ImageList ref={ImgRef}>
          {imgs.map((img, index) => (
            <ImageItem key={index}>
              <ImgWrapper>
              <Image src={img.imgUrl} alt="pic" />
              </ImgWrapper>
            </ImageItem>
          ))}
        </ImageList>
      </ImageWraper>
    </>
  );
};

export default ImageSlider;
