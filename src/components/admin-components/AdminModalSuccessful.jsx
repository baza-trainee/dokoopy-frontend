import React, { useState } from "react";
import { CloseModal } from "../../assets/icon/close-modal";
import checkMark from "../../assets/icon/check-mark.svg";
import { useNavigate } from "react-router-dom";

export const AdminModalSuccessful = () => {
   const navigate = useNavigate();
   const [isModalOpen, setIsModalOpen] = useState(false);

   const openModal = () => {
      setIsModalOpen(true);
   };

   const closeModal = () => {
      setIsModalOpen(false);
   };

   return (
     <div className={`backdrop ${isModalOpen ? "" : "is-hidden"} data-modal`}>
         <div className="modal-successful">
            <div className="modal-content">
         
               <div className="modal-close-btn">
                  <CloseModal onClick={closeModal}>Закрити</CloseModal>                
               </div>
               <div className="check-mark-modal">
                  <img src={checkMark} alt="Check Mark" />
               </div>
               <b className="modal-content-text">Пароль успішно змінено!</b>
               <button className="admin-button" onClick={() => navigate("/admin")}>Закрити</button>          
            </div>         
       </div>
      </div>
   );
};

