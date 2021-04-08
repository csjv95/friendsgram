import DaumPostcode from 'react-daum-postcode';

const postCodeStyle = {
  display: "block",
  position: "absolute",
  top: "50px",
  zIndex: "100",
  padding: "7px"
}

const postCode = () => {
  const handleComplete = () => {

  }
  return (
    <DaumPostcode 
          onComplete={handleComplete}
          style={postCodeStyle}
          height={700}
        />
  )
}

export default postCode;
