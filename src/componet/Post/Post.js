import React from "react";
import styled from "styled-components";
import { StCloseIcon, StMap, StUpload } from "../../Global/StIcon/StIcon";
import ImageSlider from "../Home/ImageSlider";
import postDataToStore from "../../service/postData/postDataToStore";
import postDataToStorage from "../../service/postData/postDataToStorage";

const PostCotainer = styled.section`
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

const PostForm = styled.form`
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

const UploadTitle = styled.h1`
  margin: 0;
  text-align: center;
`;

const UploadSpace = styled.ul`
  display: flex;
  justify-content: space-between;
`;

const UploadLabelBtn = styled.label`
  cursor: pointer;
`;

const UploadInput = styled.input`
  display: none;
`;

const UploadImg = styled.ul`
  height: 300px;
  margin: 1em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.backgroundColor};
`;

const UploadImgPreview = styled.ul`
  height: 300px;
`;

const ImageSliderContainer = styled.div`
  width: 100%;
  height: 280px;
`;

const UploadText = styled.ul`
  display: flex;
  flex-direction: column;
  & > :first-child {
    margin-bottom: 0.3em;
  }
`;
const Textarea = styled.textarea`
  width: 100%;
  height: 4em;
  border: none;
  resize: none;
`;
const UploadLocation = styled.ul`
  display: flex;
  justify-content: space-between;
  & :nth-child(n + 2) {
    display: flex;
  }
`;

const ChatAccess = styled.ul`
  display: flex;
  justify-content: space-between;
`;

const CheckBoxContainer = styled.div`
  position: relative;
`;

const CheckBoxLabel = styled.label`
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

const CheckBoxInput = styled.input`
  opacity: 0;
  z-index: 1;
  border-radius: 15px;
  width: 42px;
  height: 26px;
  &:checked + ${CheckBoxLabel} {
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

const Post = ({
  handlePost,
  handleAddress,
  location,
  imgs,
  setImgs,
  text,
  setText,
  noComments,
  setNoComments,
}) => {
  const onSubmit = () => {
    postDataToStorage(imgs);
    postDataToStore(imgs, text, noComments, location);
    alert("성공적으로 게시물이 업로드 되었습니다");
    handlePost();
  };

  const preventDefault = (event) => {
    event.preventDefault();
  };

  const handleLocation = () => {
    handleAddress();
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

  const onChageChat = () => {
    setNoComments(!noComments);
  };

  return (
    <PostCotainer>
      <PostForm onSubmit={preventDefault}>
        <CloseBtnCotainer>
          <button onClick={handlePost}>
            <StCloseIcon width="1.5" />
          </button>
        </CloseBtnCotainer>
        <UploadTitle>새 게시물 </UploadTitle>
        <UploadSpace>
          <UploadInput
            type="file"
            id="upload"
            multiple
            onChange={onChageInput}
          />
          <li>새로운 파일 업로드</li>
          <li>
            <UploadLabelBtn htmlFor="upload">
              <StUpload width="1.5" />
            </UploadLabelBtn>
          </li>
        </UploadSpace>

        {imgs ? (
          <UploadImgPreview>
            <li>
              <ImageSliderContainer>
                <ImageSlider imgs={imgs} />
              </ImageSliderContainer>
            </li>
          </UploadImgPreview>
        ) : (
          <UploadImg>
            <li>
              <UploadLabelBtn htmlFor="upload">
                <StUpload width="3" margin="1em" />
              </UploadLabelBtn>
            </li>
            <li>업로드된 사진은 여기에 표시됩니다</li>
          </UploadImg>
        )}

        <UploadText>
          <li>문구 입력</li>
          <li>
            <Textarea
              placeholder="문구를 입력해주세요"
              onChange={onChangeText}
            />
          </li>
        </UploadText>
        <UploadLocation>
          <li>위치추가</li>
          <li>
            {location && <div>{location}</div>}
            <button onClick={handleLocation}>
              <StMap width="1.5" />
            </button>
          </li>
        </UploadLocation>

        <ChatAccess>
          <li>댓글 기능</li>
          <li>
            <CheckBoxContainer onChange={onChageChat}>
              <CheckBoxInput type="checkbox" id="access" />
              <CheckBoxLabel htmlFor="access" />
            </CheckBoxContainer>
          </li>
        </ChatAccess>
        <CloseBtnCotainer>
          <button onClick={onSubmit}> 업로드</button>
        </CloseBtnCotainer>
      </PostForm>
    </PostCotainer>
  );
};

export default Post;
