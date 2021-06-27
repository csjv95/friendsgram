# Instagram

Let's start~!

## Outline

<details>
<summary>Outline</summary>
<div markdown="1"> 
 
[1.About the project](##About-the-project)    
[2.Screen Shots](##Screen-Shots)   
[3.Skills](##Skills)  
[4.Detail](##Detail)
[5.Problems and Resolutions](#Problems-and-Resolutions)       
[6.Acknowledgements](#Acknowledgements)   
</div>
</details></br>

## About the project

## Skills

- HTML
- React
- React BrowserRouter
- Styled component, styled component icons
- Firebase

## Detail

- Before sigin in

  - Sigin In
    - 로그인
  - Sigin Up
    - 회원가입 <br><br>

- After sigin in

  - Home  
    홈에서는 제일 많은 부분이 보여지는 곳인데 유저가 팔로우 한 유저의 게시물과 나의 게시물들을 시간순서에 맞게 보여지도록 하였습니다

  - Message  
    서로에게 메세지를 또는 링크를 주고 받을 수 있습니다

  - upload

    - 모바일에서는 업로드 기능이 있지만 웹에서는 업로드 기능이 없어서 추가 해봤습니다.

    - 기능
      1. 업로드 할 사진을 선택하고(필수)
      1. 포스트의 말을 적을수 있습니다(선택)
      1. 내가 위치한 곳을 적을 수 있습니다(선택)
      1. 댓글 허용 여부를 선택할 수 있습니다(선택)
      1. Reset 버튼이 있습니다
      1. 실수로 나가기 버튼을 눌러도 작성한것을 기억합니다 <br><br>

  - MyProfile

    - Profile

      - My Post
        - 사용자가 작성한 포스트들을 볼수 있습니다
      - Saved
        - 사용자가 북마크한 포스트들을 나만 볼수 있습니다
      - Heart
        - 사용자가 좋아요를한 포스트들을 볼수 있습니다
      - Tag

    - Saved

      - 사용자가 북마크한 포스트들을 나만 볼수 있습니다

    - Setting

      - Profile Edit

        - 사용자의 프로필을 업데이트할 수 있습니다 <br><br>

        1. 이름
        1. 사용자 이름
        1. 웹사이트
        1. 소개
        1. 이메일
        1. 전화번호
        1. 성별 <br><br>

      - PassWord Change
        - 사용자의 비밀번호를 업데이트할 수 있습니다 <br><br>
        1. 이전 비밀번호
        1. 새로운 비밀번호
        1. 새로운 비밀번호 확인

## Problems and Resolutions

1. useEffect & useState rander

   - Problem 
     useEffect가 component안에 있는 이유는 useState를 
     useState를 이용하여 변수의 값을 업데이트 해줬음에도 불구 하고 

```
// FollowView.js
import React, { useEffect, useState } from "react";
import { StItem, StList } from "../../Global/StList/StList";
import { StModalContainer, StModalMain } from "../../Global/StModal/StModal";
import { Theme } from "../../style/Theme";
import Profiles from "../../componet/Home/Profiles";
import getUsersData from "../../service/usersData/getUsersData";
import setFollow from "../../service/follow/setFollow";

const FollowView = ({ followerList, followingList, handleFollow }) => {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    getUsersData(followingList, setUserData); // setUserData를 넣어 업데이트
  }, [followingList]);

  const followBtnClick = async (event) => {
    const targetUser = event.target.parentNode.dataset.uid;
    await setFollow(targetUser, followingList);
  };
   console.log("userData",userData)
  return (
    <StModalContainer
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <StModalMain
        width="25em"
        height="auto"
        display="flex"
        borderRadius={Theme.borders.modalRadius}
        bgColor={Theme.colors.contentColor}
      >
        {/* following or follower */}
        <StList width="100%" padding="1em">
          <StItem display="flex" justifyContent="space-around">
            <h1>팔로우</h1>
            <button onClick={handleFollow}>x</button>
          </StItem>
          // 
          {userData.map((user) => (
            <Profiles
              key={user.uid}
              displayName={user.displayName}
              photoURL={user.photoURL}
              imgHeight="2em"
              name={user.name}
              uid={user.uid}
              btnPadding="0.5em 1em"
              btnBgColor={Theme.colors.contentColor}
              btnBorder={`1px solid ${Theme.colors.borderColor}`}
              onBtnClick={followBtnClick}
              btnText={followingList.includes(user.uid) ? "언팔로우" : "팔로우"}
            />
          ))}
        </StList>
      </StModalMain>
    </StModalContainer>
  );
};

export default FollowView;

```

```
// getUsersData.js
import { firebaseStore } from "../firebase";
// async await를 이용하여도 먼저 렌더링 된후에 아래의 코드를 실행
const getUsersData = async (users, setData) => {
  const data = [];
  await users.map(async (user) => {
    await firebaseStore
      .collection("users")
      .where("uid", "==", user)
      .get()
      .then((field) => {
        field.forEach((item) => data.push(item.data()));
      });
    setData(data);
  });
};

export default getUsersData;

```

- Resolutions  
  상위 컴포넌트에서 useEffect를 사용하고 그값을 하위 컴포넌트에 넘겨주면 문제없음

1. Problems

## Acknowledgements

- Google
- React
- MDN
- Firebase
- styled-component
