import React, { useState } from "react";
import styled from "styled-components";
import Button from "../../../Global/Button/Button";
import { StProfileImg } from "../../../Global/StProfileImg/StProfileImg";
import setUserData from "../../../service/usersData/setUserData";

const StEditMain = styled.main`
  width: 70%;
  padding: 1em 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StImgSection = styled.section`
  display: flex;
`;

const StChnageImgList = styled.ul`
  margin-left: 2em;

  & > :first-child {
    font-size: 1.5em;
  }
`;

const StChangeForm = styled.form`
  padding: 2em 4em;
  flex-grow: 1;
  display: flex;
  flex-wrap: wrap;
`;

const StSetContainer = styled.div`
  width: 100%;
  display: flex;
`;

const StLabelContainer = styled.div`
  width: 25%;
  margin-right: 2em;
  padding-top: 0.6em;
  text-align: right;

  & > :first-child {
    font-weight: 600;
  }
`;

const StIputContainer = styled.div`
  width: 75%;
  & > :first-child {
    width: 80%;
    height: 2.5em;
  }
`;

const StEditInput = styled.input`
  border: 1px solid ${({theme}) => theme.colors.borderColor};
  border-radius : ${({theme}) => theme.colors.borderRadius};
`

const StTextArea = styled.textarea`
  resize: none;
`;

const ChangeEdit = ({ userData }) => {
  const {
    photoURL,
    displayName,
    name,
    email,
    introduction,
    webSite,
    phoneNum,
    gen,
  } = userData;

  const [reUserData, setReUserData] = useState(userData);

  const onChangeInput = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setReUserData({...reUserData, [name]: value});
  };

  const onSubmit = () => {
    setUserData(reUserData);
  }
  
  return (
    <StEditMain>
      <StImgSection>
        <StProfileImg src={photoURL} alt="my-profile-img" height="4em" />
        <StChnageImgList>
          <li>{displayName}</li>
          <li>프로필사진 바꾸기</li>
        </StChnageImgList>
      </StImgSection>

      <StChangeForm action="" onSubmit={onSubmit}>
        <StSetContainer>
          <StLabelContainer>
            <label htmlFor="name">이름</label>
          </StLabelContainer>
          <StIputContainer>
            <StEditInput
              type="text"
              name="name"
              placeholder={name}
              onChange={onChangeInput}
            />
            <div>
              사람들이 이름, 별명 또는 비즈니스 이름 등 회원님의 알려진 이름을
              사용하여 회원님의 계정을 찾을 수 있도록 도와주세요.
            </div>
          </StIputContainer>
        </StSetContainer>

        <StSetContainer>
          <StLabelContainer>
            <label htmlFor="displayName">사용자 이름</label>
          </StLabelContainer>
          <StIputContainer>
            <StEditInput
              type="text"
              name="displayName"
              placeholder={displayName}
              onChange={onChangeInput}
            />
          </StIputContainer>
        </StSetContainer>

        <StSetContainer>
          <StLabelContainer>
            <label htmlFor="webSite">웹사이트</label>
          </StLabelContainer>
          <StIputContainer>
            <StEditInput
              type="text"
              name="webSite"
              placeholder={webSite}
              onChange={onChangeInput}
            />
          </StIputContainer>
        </StSetContainer>

        <StSetContainer>
          <StLabelContainer>
            <label htmlFor="introduction">소개</label>
          </StLabelContainer>
          <StIputContainer>
            <StTextArea
              type="text"
              name="introduction"
              placeholder={introduction}
              onChange={onChangeInput}
            />
            <div>개인정보</div>
            <div>
              비즈니스나 반려동물 등에 사용된 계정인 경우에도 회원님의 개인
              정보를 입력하세요. 공개 프로필에는 포함되지 않습니다.
            </div>
          </StIputContainer>
        </StSetContainer>

        <StSetContainer>
          <StLabelContainer>
            <label htmlFor="email">이메일</label>
          </StLabelContainer>
          <StIputContainer>
            <StEditInput
              type="email"
              name="email"
              placeholder={email}
              onChange={onChangeInput}
            />
          </StIputContainer>
        </StSetContainer>

        <StSetContainer>
          <StLabelContainer>
            <label htmlFor="phoneNum">전화번호</label>
          </StLabelContainer>
          <StIputContainer>
            <StEditInput
              type="tel"
              name="phoneNum"
              placeholder={phoneNum}
              onChange={onChangeInput}
            />
          </StIputContainer>
        </StSetContainer>

        <StSetContainer>
          <StLabelContainer>
            <label htmlFor="gen">성별</label>
          </StLabelContainer>
          <StIputContainer>
            <StEditInput
              type="text"
              name="gen"
              placeholder={gen}
              onChange={onChangeInput}
            />
          </StIputContainer>
        </StSetContainer>
       <Button btnText="제출" width="4em" padding="0.1em"/>
      </StChangeForm>
    </StEditMain>
  );
};

export default ChangeEdit;
