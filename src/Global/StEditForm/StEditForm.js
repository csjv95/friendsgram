import styled from "styled-components";

export const StEditMain = styled.main`
  width: ${({ width }) => width};
  padding: ${({ padding }) => padding};
  display: ${({ display }) => display};
  flex-direction: ${({ flexDirection }) => flexDirection};
  align-items: ${({ alignItmes }) => alignItmes};
`;

export const StImgSection = styled.section`
  margin-left: ${({ marginLeft }) => marginLeft};
  display: ${({ display }) => display};
  align-items: ${({alignItmes})=> alignItmes};
`;

export const StChnageImgList = styled.ul`
  margin-left: ${({ marginLeft }) => marginLeft};

  & > :first-child {
    font-size: 1.5em;
  }
`;

export const StImgLabel = styled.label`
  cursor: pointer;
`;

export const StImgInput = styled.input`
  display : none;
`

export const StChangeForm = styled.form`
  padding: ${({ padding }) => padding};
  flex-grow: ${({ flexGrow }) => flexGrow};
  display: ${({ display }) => display};
  flex-wrap: ${({ flexWrap }) => flexWrap};
`;

export const StSetContainer = styled.div`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  display: ${({ display }) => display};
`;

export const StLabelContainer = styled.div`
  width: ${({ width }) => width};
  margin-right: ${({ marginRight }) => marginRight};
  padding-top: ${({ paddingTop }) => paddingTop};
  text-align: ${({ textAlign }) => textAlign};

  & > :first-child {
    font-weight: 600;
  }
`;

export const StIputContainer = styled.div`
  width: ${({ width }) => width};
`;

export const StEditInput = styled.input`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  border: 1px solid ${({ theme }) => theme.colors.borderColor};
  border-radius: ${({ theme }) => theme.colors.borderRadius};
  background-color: ${({ bgColor }) => bgColor};
`;

export const StTextArea = styled.textarea`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  border: 1px solid ${({ theme }) => theme.colors.borderColor};
  border-radius: ${({ theme }) => theme.colors.borderRadius};
  resize: none;
`;
