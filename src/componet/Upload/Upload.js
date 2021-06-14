import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { StCloseIcon, StMap, StUpload } from "../../Global/StIcon/StIcon";
import ImageSlider from "../../Global/ImageSlider/ImageSlider";
import postDataToStore from "../../service/postData/postDataToStore";
import postDataToStorage from "../../service/postData/postDataToStorage";
import { getPostId } from "../../service/postData/getPostId";

const StPostCotainer = styled.section`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(210, 205, 205, 0.8);
  z-index: 9999;
`;

const StPostForm = styled.form`
  width: 450px;
  display: flex;
  flex-wrap: wrap;
  border: 1px solid ${({ theme }) => theme.colors.borderColor};
  border-radius: 0.2em;
  background-color: ${({ theme }) => theme.colors.contentColor};
  & > :nth-child(n) {
    width: 100%;
    padding: 0.5em 1em;
    font-weight: 600;
  }

  & > :nth-child(n + 2) {
    border-bottom: 1px solid ${({ theme }) => theme.colors.borderColor};
  }
`;

const CloseBtnCotainer = styled.div`
  display: flex;
  justify-content: flex-end;
  border-bottom: none;
  & button {
    font-weight: 600;
  }
  & :hover {
    color: ${({ theme }) => theme.colors.skyblue};
  }
`;

const StUploadTitle = styled.h1`
  margin: 0;
  text-align: center;
`;

const StUploadSpace = styled.ul`
  display: flex;
  justify-content: space-between;
`;

const StUploadLabelBtn = styled.label`
  cursor: pointer;
`;

const StUploadInput = styled.input`
  display: none;
`;

const StUploadImg = styled.ul`
  height: 19em;
  margin: 1em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.backgroundColor};
`;

const StUploadImgPreview = styled.ul`
  height: 20em;
`;

const StImageSliderContainer = styled.div`
  width: 100%;
  height: 18em;
`;

const StUploadText = styled.ul`
  display: flex;
  flex-direction: column;
  & > :first-child {
    margin-bottom: 0.3em;
  }
`;
const StTextarea = styled.textarea`
  width: 100%;
  height: 4em;
  border: none;
  resize: none;
`;

const StUploadLocation = styled.ul`
  display: flex;
  justify-content: space-between;
  & :nth-child(n + 2) {
    display: flex;
  }
`;

const StChatAccess = styled.ul`
  display: flex;
  justify-content: space-between;
`;

const StCheckBoxContainer = styled.div`
  position: relative;
`;

const StCheckBoxLabel = styled.label`
  position: absolute;
  top: 0;
  left: 0;
  width: 42px;
  height: 26px;
  border-radius: 15px;
  background: ${({ theme }) => theme.colors.lightgrey};
  cursor: pointer;
  &::after {
    content: "";
    display: block;
    border-radius: 50%;
    width: 18px;
    height: 18px;
    margin: 3px;
    background: ${({ theme }) => theme.colors.contentColor};
    box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.2);
    transition: 0.2s;
  }
`;

const StCheckBoxInput = styled.input`
  opacity: 0;
  z-index: 1;
  border-radius: 15px;
  width: 42px;
  height: 26px;
  &:checked + ${StCheckBoxLabel} {
    background: ${({ theme }) => theme.colors.skyblue};
    &::after {
      content: "";
      display: block;
      border-radius: 50%;
      width: 18px;
      height: 18px;
      margin-left: 21px;
      transition: 0.2s;
    }
  }
`;

const StLastContianer = styled.div`
  display: flex;
  justify-content: space-between;
  & button {
    font-size: 1em;
    font-weight: 600;
  }
  & :hover {
    color: ${({ theme }) => theme.colors.skyblue};
  }
`;

const Upload = ({
  handleUpload,
  handleLocation,
  location,
  setLocation,
  imgs,
  setImgs,
  text,
  setText,
  noComments,
  setNoComments,
  setProgressBar,
}) => {
  const [postId, setPostId] = useState("");

  useEffect(() => {
    getPostId(setPostId);
  }, []);

  const resetState = () => {
    setImgs([]);
    setText("");
    setLocation("");
    setNoComments(false);
  };

  const onSubmit = () => {
    postDataToStore(text, noComments, location, postId);
    postDataToStorage(imgs, postId, setProgressBar);
    resetState();
    handleUpload();
  };

  const preventDefault = (event) => {
    event.preventDefault();
  };

  const onChageInput = (event) => {
    const target = event.target.files; //객체 안에 배열로 구성
    const files = [];
    [...target].forEach((file) => {
      const imgUrl = URL.createObjectURL(file);
      files.push({ file: file, imgUrl: imgUrl });
    });
    setImgs([...imgs, ...files]);
  };

  const onChangeText = (event) => {
    const text = event.target.value;
    setText(text);
  };

  const onToggleCheckBox = () => {
    setNoComments(!noComments);
  };

  return (
    <StPostCotainer>
      <StPostForm onSubmit={preventDefault}>
        <CloseBtnCotainer>
          <button onClick={handleUpload}>
            <StCloseIcon width="1.5" />
          </button>
        </CloseBtnCotainer>
        <StUploadTitle>새 게시물 </StUploadTitle>
        <StUploadSpace>
          <StUploadInput
            type="file"
            id="files"
            multiple
            onChange={onChageInput}
          />
          <li>새로운 파일 업로드</li>
          <li>
            <StUploadLabelBtn htmlFor="files">
              <StUpload width="1.5" />
            </StUploadLabelBtn>
          </li>
        </StUploadSpace>
        {imgs.length === 0 ? (
          <StUploadImg>
            <li>
              <StUploadLabelBtn htmlFor="files">
                <StUpload width="3" margin="1em" />
              </StUploadLabelBtn>
            </li>
            <li>업로드된 사진은 여기에 표시됩니다</li>
          </StUploadImg>
        ) : (
          <StUploadImgPreview>
            <li>
              <StImageSliderContainer>
                <ImageSlider imgs={imgs} />
              </StImageSliderContainer>
            </li>
          </StUploadImgPreview>
        )}

        <StUploadText>
          <li>문구 입력</li>
          <li>
            <StTextarea
              placeholder="문구를 입력해주세요"
              onChange={onChangeText}
              value={text}
            />
          </li>
        </StUploadText>
        <StUploadLocation>
          <li>위치추가</li>
          <li>
            {location && <div>{location}</div>}
            <button
              onClick={() => {
                handleLocation();
              }}
            >
              <StMap width="1.5" />
            </button>
          </li>
        </StUploadLocation>

        <StChatAccess>
          <li>댓글 기능</li>
          <li>
            <StCheckBoxContainer>
              <StCheckBoxInput
                type="checkbox"
                id="access"
                onChange={onToggleCheckBox}
                checked={noComments}
              />
              <StCheckBoxLabel htmlFor="access" />
            </StCheckBoxContainer>
          </li>
        </StChatAccess>
        <StLastContianer>
          <button onClick={resetState}>reset</button>
          <button onClick={onSubmit}> 업로드</button>
        </StLastContianer>
      </StPostForm>
    </StPostCotainer>
  );
};

export default Upload;
