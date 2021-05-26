import DaumPostcode from "react-daum-postcode";
import styled from "styled-components";
import { StCloseIcon } from "../../Global/StIcon/StIcon";

const DaumPostcodeCotainer = styled.section`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba(210, 205, 205, 0.8);
  z-index: 9999;
`;

const postCodeStyle = {
  width: "450px",
  height: "710px",
};

const BtnContainer = styled.div`
  width: 450px;
  display: flex;
  justify-content: flex-end;
  background-color : white;
`;

const Address = ({ handleAddress, setLocation }) => {
  const handleComplete = (data) => {
    console.log(data.buildingName);
    setLocation(data.buildingName);
    handleAddress();
  };

  const handleClose = () => {
    handleAddress();
  };
  return (
    <DaumPostcodeCotainer>
      <BtnContainer>
        <button onClick={handleClose}>
          <StCloseIcon width="1.5"/>
        </button>
      </BtnContainer>
      <DaumPostcode onComplete={handleComplete} style={postCodeStyle} />
    </DaumPostcodeCotainer>
  );
};

export default Address;
