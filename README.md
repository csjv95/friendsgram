# Friendsgram

Instagram Clone coding

## Outline

<details>
<summary>Outline</summary>
<div markdown="1"> 
 
[1.About the project](##About-the-project)    
[2.Skills](##Skills)  
[3.Detail](##Detail)  
[4.Problems and Resolutions](#Problems-and-Resolutions)          
[5.Acknowledgements](#Acknowledgements)

</div>
</details></br>

## About the project

## Skills

- HTML
- React
- React BrowserRouter
- Styled component, styled component icons
- Redux
- Firebase

## Detail

- Before sigin in

  - Sigin In

    - 로그인  
      <img src="project_img\login.PNG" alt="login" width="100%"/>

  - Sigin Up
    - 회원가입  
       <img src="project_img\signUp.PNG" alt="signUp"  width="100%" />
      <br><br>

- After sigin in

  - Home  
    홈에서는 제일 많은 부분이 보여지는 곳인데 유저가 팔로우 한 유저의 게시물과 나의 게시물들을 시간순서에 맞게 보여지도록 하였습니다

    <img src="project_img\main.PNG" alt="home" />   


  - Message  
    서로에게 메세지를 또는 링크를 주고 받을 수 있습니다

    <img src="project_img\message.PNG" alt="message" />

    - 알람기능

      - pc

        <img src="project_img\messageAlram.png" alt="messageAlram" />

      - mobile

        <img src="project_img\messageAlarmMobile.jpg" alt="messageAlram" />

  - upload

    - 모바일에서는 업로드 기능이 있지만 웹에서는 업로드 기능이 없어서 추가 해봤습니다.

    - 기능
      1. 업로드 할 사진을 선택하고(필수)
      1. 포스트의 말을 적을수 있습니다(선택)
      1. 내가 위치한 곳을 적을 수 있습니다(선택)
      1. 댓글 허용 여부를 선택할 수 있습니다(선택)
      1. Reset 버튼이 있습니다
      1. 실수로 나가기 버튼을 눌러도 작성한것을 기억합니다 <br><br>

    <img src="project_img\upload.PNG" alt="upload" />

  - MyProfile

    - Profile

      - My Post
        - 사용자가 작성한 포스트들을 볼수 있습니다
      - Saved
        - 사용자가 북마크한 포스트들을 (나만 볼수 있습니다)
      - Heart
        - 사용자가 좋아요를한 포스트들을 볼수 있습니다
      - Saved
        - 사용자가 북마크한 포스트들을 (나만 볼수 있습니다)

      <img src="project_img\myPage.PNG" alt="myPage" />

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

      <img src="project_img\editProfile.PNG" alt="editProfile" />

    - PassWord Change

      - 사용자의 비밀번호를 업데이트할 수 있습니다 <br><br>

      1. 이전 비밀번호
      1. 새로운 비밀번호
      1. 새로운 비밀번호 확인

       <img src="project_img\editPw.PNG" alt="editPw" />

  - Search  
    검색을 통해 유저를 찾을수 있습니다

    - 검색기록
      이때가지 사용자가 검색을 한 기록을 볼수 있으며 기록을 부분삭제 전체 삭제 할수 있습니다

      <img src="project_img\searchRecord.PNG" alt="searchRecord" />

    - 검색  
      검색을 통해 유저를 찾을수 있습니다 검색 문자에 맞춰 오름차순으로 정렬했습니다

    <img src="project_img\search.PNG" alt="home" />

## Problems and Resolutions

1. Problems (useEffect & useState rander)

   > Problem  
   >  setState를 이용하여 state의 값을 변경해줬는데도 변화가 없어 확인 결과 [] 이 담겨있고 this value was evaluated upon first expanding. it may have changed since then라고 적혀있다

```
// FollowView.js
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

const getUsersData = (users, setData) => {
  const data = [];
  users.map(async (user) => {
    firebaseStore
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
  - setState가 비동기적으로 작동하고 state를 항상 바꿔서 표시하지 않고 가지고 있다가 한번에 바꾸는 특징이 있어 async await를 이용하여 비동기에서 순서가 있도록 해주어서 해결 하였다

```
// getUsersData.js

const getUsersData = async (users, setData) => {
  const usersArr = users.map(async (user) => {
    const data = [];
    const followingUsers = firebaseStore
      .collection("users")
      .where("uid", "==", user)
      .get();

    (await followingUsers).docs.forEach((doc) => data.push(doc.data()));
    return data;
  });

  const promiseAll = await Promise.all(usersArr);
  const result = promiseAll.flatMap((p) => p);
  setData(result);
};
```

2. Problems (Access-Control-Allow-Origin issue)

- Problem

  1. 클라이언트에서 외부 API 서버로 요청을 보내서 CROS 발생
  2. 외부 API를 사용해서 내가 서버를 제어 할수 없어서 HTTP 응답해더인 Aceess-Control-Allow-Origin을 설정을할 수 없음

  > CORS (Cross Origin Resource Sharing) 현재 APP or 도메인 페이지에서 다른 웹페이지 도메인으로 리소스가 요청되는 경우입니다 보안상 이유로 제한되게 되어있습니다

- solution

```
const sendMessage = (message, token) => {
//ajax,fetch,axios같은 클라이언트에서 말고  서버에서 node로 집적 통신 하면 괜찮아진다
// firebase에서 지원
const request = require("request");
const options = {
  uri: "https://fcm.googleapis.com/fcm/send",
  method: "POST",
  headers: {
    "content-type": "application/json",
    Authorization: process.env.REACT_APP_FIREBASE_MESSAGEING_KEY,
  },
  json: {
    to: token,
    notification: {
      title: "you got a new massage",
      body: message,
    },
  },
};
request.post(options, function (err, httpResponse, body) {
  console.log('body',body)
  console.log("httpResponse",httpResponse)
});
};
export default sendMessage;

```

## version

1.0.0 => FriendsGram 첫 배포!  
2.0.0 => Redux,redux-Thunk를 이용해서 데이터 관리  
3.0.0 => 반응형 웹페이지 제작

## Acknowledgements

- Google
- React
- MDN
- Firebase
- styled-component
