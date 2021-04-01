import styled from "styled-components";
import { HomeAlt } from "@styled-icons/boxicons-regular/HomeAlt";
import { Send } from "@styled-icons/feather/Send";
import { Compass2 } from "@styled-icons/icomoon/Compass2";
import { Heart } from "@styled-icons/bootstrap/Heart";
import { Chatbubble } from "@styled-icons/ionicons-outline/Chatbubble";
import { Bookmark } from "@styled-icons/feather/Bookmark";
import { DotsHorizontalRounded } from "@styled-icons/boxicons-regular/DotsHorizontalRounded";
import { Smile } from "@styled-icons/feather/Smile";
import { FacebookSquare } from "@styled-icons/boxicons-logos/FacebookSquare";
import { Google2 } from "@styled-icons/icomoon/Google2";

export const StHomeIcon = styled(HomeAlt)`
  width: ${({ width }) => width}em;
`;

export const StSendIcon = styled(Send)`
  width: ${({ width }) => width}em;
`;

export const StCompassIcon = styled(Compass2)`
  width: ${({ width }) => width}em;
`;

export const StHeartIcon = styled(Heart)`
  width: ${({ width }) => width}em;
`;

export const StChatbubbleIcon = styled(Chatbubble)`
  width: ${({ width }) => width}em;
`;
export const StBookmarkIcon = styled(Bookmark)`
  width: ${({ width }) => width}em;
`;

export const StMenuIcon = styled(DotsHorizontalRounded)`
  width: ${({ width }) => width}em;
  cursor: pointer;
`;

export const StDotIcon = styled.div`
  width: 0.4em;
  height: 0.4em;
  display: inline-block;
  border-radius: 50%;
  background-color: #d3d3d3;
  cursor: pointer;
`;

export const StSmileIocn = styled(Smile)`
  background-color: white;
  width: ${({ width }) => width}em;
`;
export const StFacebookSquareIcon = styled(FacebookSquare)`
  width: 1.3em;
  margin-right: 0.5em;
  color: #0000ff;
`;

export const StGoogleSquareIcon = styled(Google2)`
  width: 1.1em;
  margin-right: 0.5em;
`;