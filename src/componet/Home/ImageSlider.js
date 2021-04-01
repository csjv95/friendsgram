import React, { useRef, useState } from "react";
import styled from "styled-components";

const Images = [
  "https://picsum.photos/id/0/600/600",
  "https://picsum.photos/id/100/200/600",
  "https://picsum.photos/id/500/600/600",
  "https://picsum.photos/id/900/600/600",
  "https://picsum.photos/id/1000/600/600",
];

const ImageWraper = styled.section`
  width: 37.5em;
  min-height: 37.5em;
  overflow: hidden;
`;

const ImageList = styled.ul`
  display: flex;
`;

const ImageItem = styled.li`
  min-width: 100%;
  min-height: 100%;
`;

const Image = styled.img`
  width: 37.5em;
  height: 37.5em;
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
        <button onClick={backClick}>back</button>
        <ImageList ref={ImgRef}>
          {Images.map((img) => (
            <ImageItem>
              <Image src={img} alt="pic" />
            </ImageItem>
          ))}
        </ImageList>
          <button onClick={nextClick}>next</button>
      </ImageWraper>
    </>
  );
};

export default ImageSlider;
