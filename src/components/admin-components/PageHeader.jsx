import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AdminArrowLeft } from "../../assets/admin-icons/admin-arrow-left";
import { RemoveIcon } from "../../assets/admin-icons/remove-icon";
import { AdminModal } from "../admin-components/AdminModal";

export const PageHeader = ({ title, edit, removeClick, success, minLength }) => {
   const navigate = useNavigate();

   const [isModalOpen, setIsModalOpen] = useState(false);

   const handleOpenModal = () => {
      if (!minLength) {
         setIsModalOpen(true);
      }
   };

   const handleCloseModal = () => {
      setIsModalOpen(false);
   };

   return (
      <>
         <div className="sub-title-container">
            <div className="title-icon">
               <div className="heder-icon-arrow" onClick={() => navigate(-1)}>
                  <AdminArrowLeft></AdminArrowLeft>
               </div>
               <h3 className="admin-sub-title">{title}</h3>
            </div>
            {edit && (
               <button
                  className={minLength ? "remove-btn btn-disable" : "remove-btn"}
                  onClick={handleOpenModal}
               >
                  <div>
                     <p className="remove-btn-text">Видалити</p>
                     <RemoveIcon />
                  </div>
               </button>
            )}
         </div>
         <div className="divider"></div>
         {isModalOpen && (
            <AdminModal success={success} removeItem={removeClick} onClose={handleCloseModal} />
         )}
      </>
   );
};
