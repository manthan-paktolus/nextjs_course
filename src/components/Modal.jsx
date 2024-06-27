import Styles from "./Modal.module.css";
import { useNavigate } from "react-router-dom";
const Modal = ({ children }) => {
  const navigate = useNavigate();
  const closeHandler = () => {
    navigate("/");
  };

  return (
    <>
      <div className={Styles.backdrop} onClick={closeHandler} />
      <dialog open className={Styles.modal}>
        {children}
      </dialog>
    </>
  );
};

export default Modal;
