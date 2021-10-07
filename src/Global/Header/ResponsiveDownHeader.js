import styled from "styled-components";
import {
  StSearch,
  StHomeIcon,
  StSendIcon,
  StPlusSquare,
} from "../StIcon/StIcon";
import { Link } from "react-router-dom";
import StButton from "../StButton/StButton";
import LoadingSpinner from "../Loading/LoadingSpinner";

const DownHeader = styled.header`
  position: fixed;
  width: 100%;
  left: 0;
  bottom: 0;
  padding: 0.5em;
  border-top: 1px solid ${({ theme }) => theme.colors.borderColor};
  background-color: ${({ theme }) => theme.colors.contentColor};
  text-align: center;
  z-index: 10000000;
`;

const DownNav = styled.nav`
  display: flex;
  justify-content: space-around;
`;

const StLink = styled(Link)``;

const navList = [
  { index: 0, icon: <StHomeIcon width="1.5" />, to: "/" },
  { index: 1, icon: <StSearch width="1.5" />, type: "button" },
  { index: 2, icon: <StPlusSquare width="1.5" />, type: "button" },
  { index: 3, icon: <StSendIcon width="1.5" />, to: "/direct" },
];

const ResponsiveDownHeader = ({ foregroundMessageCount, handleUpload }) => {
  const selectFnc = (index) => {
    if (index === 1) {
      console.log("message modal");
    } else if (index === 2) {
      handleUpload();
    } else {
      return;
    }
  };
  return (
    <DownHeader>
      <DownNav>
        {navList.map((item) =>
          item.type === "button" ? (
            <StButton
              key={item.index}
              btnText={item.icon}
              onClick={() => selectFnc(item.index)}
            />
          ) : item.index === 3 ? (
            <StLink key={item.index} to={item.to ? item.to : "/"}>
              <span>
                {foregroundMessageCount > 0 && foregroundMessageCount}
              </span>
              <StButton btnText={item.icon} />
            </StLink>
          ) : (
            <StLink key={item.index} to={item.to ? item.to : "/"}>
              <StButton btnText={item.icon} />
            </StLink>
          )
        )}
      </DownNav>
    </DownHeader>
  );
};

export default ResponsiveDownHeader;
