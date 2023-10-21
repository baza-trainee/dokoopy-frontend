import React from "react";
import { CloseModal } from "../../assets/icon/close-modal";
import checkMark from "../../assets/icon/check-mark.svg";

export const AdminModalSuccessful = ({ isModalTrue, closeModal }) => {
  const handleModalClose = () => {
    closeModal();
   };   
   
  return (
    <div className={`backdrop ${isModalTrue ? "" : "is-hidden"}`}>
      <div className="modal-successful">
        <div className="modal-content">          
            <button onClick={handleModalClose} className="modal-close-btn">
              <CloseModal />
            </button>          
          <div className="check-mark-modal">
            <img src={checkMark} alt="Check Mark" />
          </div>
          <b className="modal-content-text">Пароль успішно змінено!</b>
          <button className="admin-button" onClick={handleModalClose}>
            Закрити
          </button>
        </div>
      </div>
    </div>
  );
};