import ReactDOM from "react-dom";

const ModalPotal = ({ children }) => {
  const post = document.getElementById("post");
  const address = document.getElementById("address");
  console.log(children);
  return ReactDOM.createPortal(children, post,address);
};

export default ModalPotal;
