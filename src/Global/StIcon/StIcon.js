import styled from "styled-components";
import { HomeAlt } from "@styled-icons/boxicons-regular/HomeAlt";
import { Send } from "@styled-icons/feather/Send";
import { Compass2 } from "@styled-icons/icomoon/Compass2";
import { Heart } from "@styled-icons/bootstrap/Heart";
import { HeartFill } from "@styled-icons/bootstrap/HeartFill";
import { Chatbubble } from "@styled-icons/ionicons-outline/Chatbubble";
import { Bookmark } from "@styled-icons/bootstrap/Bookmark";
import { BookmarkFill } from "@styled-icons/bootstrap/BookmarkFill";
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
import { Clear } from "@styled-icons/material/Clear";
import { DotFill } from "@styled-icons/octicons/DotFill";
import { ArrowIosBackOutline } from "@styled-icons/evaicons-outline/ArrowIosBackOutline";
import { ArrowIosForwardOutline } from "@styled-icons/evaicons-outline/ArrowIosForwardOutline";
import { PencilSquare } from "@styled-icons/bootstrap/PencilSquare";
import { CheckboxBlankCircle } from "@styled-icons/remix-line/CheckboxBlankCircle";
import { Check } from "@styled-icons/boxicons-regular/Check";
import { FilePicture } from "@styled-icons/icomoon/FilePicture";
import { Instagram } from "@styled-icons/bootstrap/Instagram";
import { Home } from "@styled-icons/foundation/Home";
import { SendPlane } from "@styled-icons/remix-fill/SendPlane";
import { Search } from "@styled-icons/bootstrap/Search";
import { Key } from "@styled-icons/bootstrap/Key";
import { KeyFill } from "@styled-icons/bootstrap/KeyFill";
import { LogOut } from "@styled-icons/boxicons-regular/LogOut";

export const StSearch = styled(Search)`
  width: ${({ width }) => width}em;
`;

export const StLogOut = styled(LogOut)`
  width: ${({ width }) => width}em;
`;

export const StKey = styled(Key)`
  width: ${({ width }) => width}em;
`;

export const StKeyFill = styled(KeyFill)`
  width: ${({ width }) => width}em;
`;

export const StInstagram = styled(Instagram)`
  width: ${({ width }) => width}em;
  height: ${({ height }) => height}em;
  color: ${({ color }) => color};
`;

export const StHomeIcon = styled(HomeAlt)`
  width: ${({ width }) => width}em;
`;

export const StFillHomeIcon = styled(Home)`
  width: ${({ width }) => width}em;
`;

export const StSendIcon = styled(Send)`
  width: ${({ width }) => width}em;
`;

export const StFillSendIcon = styled(SendPlane)`
  width: ${({ width }) => width}em;
`;

export const StCompassIcon = styled(Compass2)`
  width: ${({ width }) => width}em;
`;

export const StHeartIcon = styled(Heart)`
  width: ${({ width }) => width}em;
`;

export const StHeartFill = styled(HeartFill)`
  width: ${({ width }) => width}em;
  color: ${({ color }) => color};
`;

export const StChatbubbleIcon = styled(Chatbubble)`
  width: ${({ width }) => width}em;
`;

export const StBookmarkIcon = styled(Bookmark)`
  width: ${({ width }) => width}em;
`;

export const StBookmarkFill = styled(BookmarkFill)`
  width: ${({ width }) => width}em;
  color: ${({ color }) => color};
`;

export const StMenuIcon = styled(DotsHorizontalRounded)`
  width: ${({ width }) => width}em;
`;

export const StSmileIocn = styled(Smile)`
  width: ${({ width }) => width}em;
  margin: ${({ margin }) => margin};
  padding: ${({ padding }) => padding};
  background-color: white;
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

export const StClear = styled(Clear)`
  width: ${({ width }) => width};
  color: ${({ color }) => color};
  border-radius: ${({ borderRadius }) => borderRadius};
  background-color: ${({ bgColor }) => bgColor};
`;

export const StDotFill = styled(DotFill)`
  width: ${({ width }) => width};
  color: ${({ color }) => color};
  background-color: ${({ bgColor }) => bgColor};
`;

export const StArrowLeft = styled(ArrowIosBackOutline)`
  width: ${({ width }) => width};
  color: ${({ color }) => color};
  background-color: ${({ bgColor }) => bgColor};
`;

export const StArrowRight = styled(ArrowIosForwardOutline)`
  width: ${({ width }) => width};
  color: ${({ color }) => color};
  background-color: ${({ bgColor }) => bgColor};
`;

export const StPencilSquare = styled(PencilSquare)`
  width: ${({ width }) => width};
  padding: ${({ padding }) => padding};
  color: ${({ color }) => color};
  background-color: ${({ bgColor }) => bgColor};
`;

export const StUnChecked = styled(CheckboxBlankCircle)`
  width: ${({ width }) => width};
  padding: ${({ padding }) => padding};
  color: ${({ color }) => color};
  background-color: ${({ bgColor }) => bgColor};
`;

export const StChecked = styled(Check)`
  width: ${({ width }) => width};
  padding: ${({ padding }) => padding};
  border-radius: ${({ borderRadius }) => borderRadius};
  color: ${({ color }) => color};
  background-color: ${({ bgColor }) => bgColor};
`;

export const StFilePicture = styled(FilePicture)`
  width: ${({ width }) => width};
  margin: ${({ margin }) => margin};
  padding: ${({ padding }) => padding};
  color: ${({ color }) => color};
  background-color: ${({ bgColor }) => bgColor};
`;
