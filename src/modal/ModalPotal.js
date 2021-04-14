import ReactDOM from "react-dom";

const ModalPotal = ({ children,potalName }) => {
  
  const potal = () => {
    const name = potalName;
    return name;
  }
  console.log(potalName,children);
  return ReactDOM.createPortal(children,potal());
};

export default ModalPotal;
