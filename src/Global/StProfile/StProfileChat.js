import styled from 'styled-components'
import { StProfileImg } from '../StProfileImg/StProfileImg'

const StProfile = styled.section`
  padding: ${({ padding }) => padding};
  display: flex;
  align-items: center;
`

const StProfileInfo = styled.ul`
  margin: 0 1em;
  display: flex;
  flex-direction: column;
`

const StProfileDisplayName = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1em;
  font-weight: 600;
`
const StUserLoginState = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.8em;
`

const StProfileChat = ({
  photoURL,
  displayName,
  uid,
  room,
  profilePadding,
  imgHeight,
  loginState,
}) => {
  return (
    <StProfile data-uid={uid} data-room={room} padding={profilePadding}>
      <StProfileImg src={photoURL} height={imgHeight} />
      <StProfileInfo>
        <StProfileDisplayName>{displayName}</StProfileDisplayName>
        {loginState && <StUserLoginState>Is user login?</StUserLoginState>}
      </StProfileInfo>
    </StProfile>
  )
}

export default StProfileChat
