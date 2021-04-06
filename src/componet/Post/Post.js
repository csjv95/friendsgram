import React from "react";
import styled from "styled-components";
import { StMap, StUpload } from "../../Global/StIcon/StIcon";

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
    border-bottom: 1px solid ${({ theme }) => theme.colors.borderColor};
    font-weight: 600;
  }
`;

const UploadSpace = styled.ul`
  display: flex;
  justify-content: space-between;
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
`;

const ChatAccess = styled.ul`
  display: flex;
  justify-content: space-between;
`;

const Checkbox = styled.input`
  display : none;
` 

const ToggleBtn = styled.span`
  
`
const Post = () => {
  return (
    <PostCotainer>
      <PostForm>
        <h1>새 게시물 </h1>
        <UploadSpace>
          <label htmlFor="upload">
            <Checkbox type="checkbox" id="upload"/>
          </label>
          <li>새로운 파일 업로드</li>
          <li>
            <button>
              <StUpload width="1.5" />
            </button>
          </li>
        </UploadSpace>
        <UploadImg>
          <li>
            <StUpload width="3" />
          </li>
          <li>업로드된 사진은 여기에 표시됩니다</li>
        </UploadImg>

        <UploadText>
          <li>문구 입력</li>
          <li>
            <Textarea placeholder="문구를 입력해주세요"></Textarea>
          </li>
        </UploadText>
        <UploadLocation>
          <li>위치추가</li>
          <li>
            <button>
              <StMap width="1.5" />
            </button>
          </li>
        </UploadLocation>

        <ChatAccess>
          <li>댓글 기능</li>
          <li>
            <label htmlFor="access">
              <Checkbox type="checkbox" id="access"/>
              <ToggleBtn>toggle</ToggleBtn>
            </label>
          </li>
        </ChatAccess>
      </PostForm>
    </PostCotainer>
  );
};

export default Post;
