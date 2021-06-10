import React from 'react';
import styled from "styled-components";

const StCarouselSection = styled.section`

`

const StCarouselList = styled.ul`

`

const StCarouselItem = styled.li`

`


const ContentCarousel = ({content}) => {
  return (
    <StCarouselSection>
      <StCarouselList>
        {content.map(item => (
          <StCarouselItem>{item}</StCarouselItem>
        ))}
      </StCarouselList>
    </StCarouselSection>
  );
};

export default ContentCarousel;