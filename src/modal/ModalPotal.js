import ReactDOM from "react-dom";

const ModalPotal = ({ children }) => {
  const post = document.getElementById("post");
  console.log(children);
  return ReactDOM.createPortal(children, post);
};

export default ModalPotal;
