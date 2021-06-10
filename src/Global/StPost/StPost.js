import styled from "styled-components";

export const StPostHeader = styled.header`
  padding : ${({padding}) => padding};
  display : ${({display}) => display};
  justify-content : ${({justifyContent}) => justifyContent};
  align-items : ${({alignItems}) => alignItems};
`

export const StProfileContainer = styled.div`
  height : ${({height}) => height};
  display : ${({display}) => display};
  justify-content : ${({justifyContent}) => justifyContent};
  align-items : ${({alignItems}) => alignItems};

`
export const StProfileInfo = styled.div`
  margin: ${({margin}) => margin};
  display : ${({display}) => display};
  justify-content : ${({justifyContent}) => justifyContent};
  align-items : ${({alignItems}) => alignItems};

`
export const StProfileId = styled.span`
  font-weight : ${({fontWeight}) => fontWeight};
`
export const StProfileLocation = styled.span`
  margin: ${({margin}) => margin};
  font-size : ${(fontSize) => fontSize};

`