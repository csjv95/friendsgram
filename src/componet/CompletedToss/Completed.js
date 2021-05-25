import React from 'react';
import styled from "styled-components";

const StText = styled.div`
  width : 100%;

`

const Completed = (text) => {
  return (
    <StText>
      {text}
    </StText>
  );
};

export default Completed;