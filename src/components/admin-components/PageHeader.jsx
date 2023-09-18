import { useNavigate } from "react-router-dom";
import leftArow from "../../assets/icon/Vector.svg";
import removeIcon from "../../assets/icon/remove-icon.svg";
import { AdminModal } from "../admin-components/AdminModal";
import { useState } from "react";


export const PageHeader = ({ title, edit }) => {
   const navigate = useNavigate();

   const [isModalOpen, setIsModalOpen] = useState(false);

   const handleOpenModal = () => {
      setIsModalOpen(true);
    };
  
    const handleCloseModal = () => {
      setIsModalOpen(false);
    };

   return (
      <>
         <div className="sub-title-container">
            <div className="title-icon">
               <img className="title-icon-arrow" onClick={() => navigate(-1)} src={leftArow}></img>
               <h3 className="admin-sub-title">{title}</h3>
            </div>
            {edit && (
               <button className="remove-btn" onClick={handleOpenModal}>
                  <div>
                     <p className="remove-btn-text" >Видалити</p>
                     <img src={removeIcon}></img>
                  </div>
               </button>
            )}
         </div>
         <div className="divider"></div>
         {isModalOpen && <AdminModal onClose={handleCloseModal}/>}
      </>
   );
};
