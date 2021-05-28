import styled from "styled-components";
import { HomeAlt } from "@styled-icons/boxicons-regular/HomeAlt";
import { Send } from "@styled-icons/feather/Send";
import { Compass2 } from "@styled-icons/icomoon/Compass2";
import { Heart } from "@styled-icons/bootstrap/Heart";
import { Chatbubble } from "@styled-icons/ionicons-outline/Chatbubble";
import { Bookmark } from "@styled-icons/bootstrap/Bookmark";
import { DotsHorizontalRounded } from "@styled-icons/boxicons-regular/DotsHorizontalRounded";
import { Smile } from "@styled-icons/feather/Smile";
import { FacebookSquare } from "@styled-icons/boxicons-logos/FacebookSquare";
import { Google2 } from "@styled-icons/icomoon/Google2";
import { ChevronLeft } from "@styled-icons/boxicons-solid/ChevronLeft";
import { ChevronRight } from "@styled-icons/boxicons-solid/ChevronRight";
import { Upload } from "@styled-icons/bootstrap/Upload";
import { Map } from "@styled-icons/boxicons-regular/Map";
import { Close } from "@styled-icons/evaicons-solid/Close";
import { PlusSquare } from "@styled-icons/bootstrap/PlusSquare";
import { UserCircle } from "@styled-icons/boxicons-regular/UserCircle";
import { Settings } from "@styled-icons/material/Settings";
import { Transfer } from "@styled-icons/boxicons-regular/Transfer";
import { ImageMultiple } from "@styled-icons/fluentui-system-filled/ImageMultiple";
import { Table } from "@styled-icons/fluentui-system-regular/Table";
import { Tv } from "@styled-icons/boxicons-regular/Tv";
import { Tag } from "@styled-icons/bootstrap/Tag";
import { Cancel } from "@styled-icons/material/Cancel";

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
  width: ${({ width }) => width}em;
  color: ${({ color }) => color};
`;

export const StRightArrow = styled(ChevronRight)`
  width: ${({ width }) => width}em;
  color: ${({ color }) => color};
`;

export const StUpload = styled(Upload)`
  margin: ${({ margin }) => margin};
  width: ${({ width }) => width}em;
  color: ${({ color }) => color};
`;

export const StMap = styled(Map)`
  width: ${({ width }) => width}em;
  color: ${({ color }) => color};
`;

export const StCloseIcon = styled(Close)`
  width: ${({ width }) => width}em;
  color: ${({ color }) => color};
`;

export const StPlusSquare = styled(PlusSquare)`
  width: ${({ width }) => width}em;
  color: ${({ color }) => color};
`;

export const StUserCircle = styled(UserCircle)`
  width: ${({ width }) => width}em;
  color: ${({ theme }) => theme.colors.black};
`;

export const StSettings = styled(Settings)`
  width: ${({ width }) => width}em;
  color: ${({ theme }) => theme.colors.black};
`;

export const StTransfer = styled(Transfer)`
  width: ${({ width }) => width}em;
  color: ${({ theme }) => theme.colors.black};
`;

export const StLine = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${({ theme }) => theme.colors.borderColor};
`;

export const StImageMultiple = styled(ImageMultiple)`
  width: ${({ width }) => width}em;
  position: ${({ position }) => position};
  top: ${({ top }) => top}px;
  right: ${({ right }) => right}px;
  color: ${({ color }) => color};
`;

export const StTable = styled(Table)`
  width: ${({ width }) => width}em;
`;

export const StTv = styled(Tv)`
  width: ${({ width }) => width}em;
`;

export const StTag = styled(Tag)`
  width: ${({ width }) => width}em;
`;

export const StCancel = styled(Cancel)`
  width: ${({ width }) => width};
  background-color : ${({ bgColor }) => bgColor};
  color : ${({color}) => color};
  border-radius : ${({borderRadius}) => borderRadius};
`;
