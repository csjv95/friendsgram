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
import {ChevronLeft} from "@styled-icons/boxicons-solid/ChevronLeft";
import {ChevronRight} from "@styled-icons/boxicons-solid/ChevronRight"

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
`;

export const StDotIcon = styled.button`
  width: 0.4em;
  height: 0.4em;
  display: inline-block;
  border-radius: 50%;
  background-color: #d3d3d3;
`;

export const StSmileIocn = styled(Smile)`
  background-color: white;
  width: ${({ width }) => width}em;
`;

export const StFacebookSquareIcon = styled(FacebookSquare)`
  width: ${({ width }) => width}em;
  margin-right: 0.5em;
  color: #0000ff;
`;

export const StGoogleSquareIcon = styled(Google2)`
  width: ${({ width }) => width}em;
  margin-right: 0.5em;
`;

export const StLeftArrow = styled(ChevronLeft)`
  width: ${({width})=> width}em;
  color: ${({color}) => color};
`

export const StRightArrow = styled(ChevronRight)`
  width : ${({width}) => width}em;
  color: ${({color}) => color};
`