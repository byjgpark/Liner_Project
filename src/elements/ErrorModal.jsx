// React
import React from "react";
// Redux
import { useDispatch } from "react-redux";
// Styled-Component
import styled from "styled-components";
// Icon
import ExitIcon from "../static/images/exit_icon.png";
import { changeError } from "../redux/modules/searchSlice";

const ErrorModal = ({ onClose, closeModal, errorFlag }) => {
  // Redux : dispatch
  const dispatch = useDispatch();

  // if showModal is false, the modal will not be shown
  if (closeModal) {
    // setCloseModal(false)
    errorFlag.current = true;
    return null;
  }
  
  // Func : to close the modal when the buttoms get clicked
  const handleClose = () => {
    onClose();
    dispatch(changeError());
  };

  return (
    <ModalCon>
      <ModalContent>
        <ModalHeader>
          <div className="modal-title">Something went wrong</div>
          <img onClick={handleClose} src={ExitIcon} alt="exit_icon"></img>
        </ModalHeader>
        <ModalBody></ModalBody>
        <ModalFooter>
          <button className="modal-okay" onClick={handleClose}>
            OK
          </button>
        </ModalFooter>
      </ModalContent>
    </ModalCon>
  );
};

export default ErrorModal;

const ModalCon = styled.div`
  z-index: 10000;
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ModalContent = styled.div`
  width: 360px;
  height: 160px;
  border-radius: 20px;
  background-color: #fff;
`;

const ModalHeader = styled.div`
  position: relative;
  display: flex;
  height: 50%;

  div {
    position: absolute;
    left: 24px;
    top: 24px;
    font-size: 20px;
    font-weight: 700;
  }

  img {
    position: absolute;
    top: 29.41px;
    right: 29.41px;
    width: 13.18px;
    height: 13.18px;
  }
`;

const ModalBody = styled.div``;

const ModalFooter = styled.div`
  position: relative;
  height: 50%;

  .modal-okay {
    bottom: 24px;
    right: 24px;
    position: absolute;
    width: 69px;
    height: 42px;
    border-radius: 10px;
    border: none;
    background-color: rgba(0, 195, 204, 1);

    font-size: 14px;
    font-weight: 700;
    color: white;
  }
`;
