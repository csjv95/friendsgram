import React, { useRef, useState } from "react";
import styled from "styled-components";
import { StLeftArrow, StRightArrow } from "../../Global/StIcon/StIcon";

const Images = [
  "https://picsum.photos/id/0/600/600",
  "https://picsum.photos/id/100/200/600",
  "https://picsum.photos/id/500/600/600",
  "https://picsum.photos/id/900/600/600",
  "https://picsum.photos/id/1000/600/600",
];

const ImageWraper = styled.section`
  position: relative;
  width: 37.5em;
  min-height: 37.5em;
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

const Image = styled.img`
  width: 37.5em;
  height: 37.5em;
`;

const BtnCotainer = styled.div`
  width: 95%;
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

const ImageSlider = () => {
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
          {Images.map((img) => (
            <ImageItem>
              <Image src={img} alt="pic" />
            </ImageItem>
          ))}
        </ImageList>
      </ImageWraper>
    </>
  );
};

export default ImageSlider;
