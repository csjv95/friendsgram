import React from "react";
import styled from "styled-components";
import { StMainRouterSection } from "../../Global/StMainRouterSection/StMainRouterSection";
import Profiles from "../Home/Profiles";

const StSuggestContainer = styled.section`
  margin: 0 auto;
  width: 700px;
  display: flex;
  flex-direction: column;
`;

const Suggest = ({usersList}) => {
  return (
    <StMainRouterSection>
      <StSuggestContainer>
        <h2>추천</h2>
        <div>hello</div>
        <Profiles imgHeigh="4em"/>
      </StSuggestContainer>
    </StMainRouterSection>
  );
};

export default Suggest;
