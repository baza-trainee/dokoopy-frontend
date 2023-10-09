import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import iconx from "../../assets/images/iconx.svg";
import { Spinner } from "./Spinner";

export const AdminModal = ({ onClose, removeItem, success }) => {
   const [isLoading, setLoading] = useState(false);
   const navigate = useNavigate();
   useEffect(() => {
      if (success) {
         setLoading(false);
         navigate(-1);
      }
   }, [success]);

   const handleCloseClick = () => {
      onClose();
   };
   const handlerRemove = () => {
      removeItem();
      setLoading(true);
   };

   return (
      <>
         {isLoading ? (
            <Spinner size={300} color={"#2672e4"} />
         ) : (
            <div className="admin-modal">
               <div className="admin-modal-window">
                  <div className="admin-modal-button-x">
                     <button className="admin-button-close" onClick={handleCloseClick}>
                        <img src={iconx} className="iconx-img" alt="Закрити" />
                     </button>
                  </div>
                  <div className="admin-modal-text">
                     <h2>
                        Ви впевнені, що хочете
                        <br />
                        видалити проєкт?
                     </h2>

                     <div className="admin-modal-button">
                        <button className="admin-modal-no" onClick={handleCloseClick}>
                           <h4>Ні</h4>
                        </button>
                        <button onClick={handlerRemove} className="admin-modal-yes">
                           <h4>Так</h4>
                        </button>
                     </div>
                  </div>
               </div>
            </div>
         )}
      </>
   );
};
