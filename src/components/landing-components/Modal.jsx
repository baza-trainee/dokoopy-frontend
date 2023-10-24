import { useEffect } from "react";

import { Link, useNavigate } from "react-router-dom";

import { useAppContext } from "../provider-components/app-provider";

import iconx from "../../assets/images/iconx.svg";
import frameThanks from "../../assets/images/frameThanks.svg";

import localization from "../../assets/language-switcher/localization";

export const Modal = ({ onClose, closeMenuHandler }) => {
   const AppProvider = useAppContext();

   const handleModalClick = e => {
      if (e.target.classList.contains("modal")) {
         onClose();
      }
   };

   const navigate = useNavigate();

   const goToHomePage = e => {
      if (e.target.classList.contains("backpage")) {
         navigate("/");
         window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
         onClose();
         closeMenuHandler();
      }
   };

   const handleButtonCloseClick = () => {
      onClose();
   };

   const handleKeyPress = e => {
      if (e.key === "Escape") {
         onClose();
      }
   };

   useEffect(() => {
      window.addEventListener("keydown", handleKeyPress);

      return () => {
         window.removeEventListener("keydown", handleKeyPress);
      };
   }, []);

   return (
      <div className="modal" onClick={handleModalClick}>
         <div className="modal-window">
            <div className="modal-button">
               <button className="button-close" onClick={handleButtonCloseClick}>
                  <img src={iconx} className="iconx" alt="Close" />
               </button>
            </div>
            <div className="modal-text">
               <h2>{localization.modal.title}</h2>
               <img src={frameThanks} className="imgthank" alt="Thanks" />
               <p className="backpage" onClick={goToHomePage}>
                  {localization.modal.toMain}
               </p>
            </div>
         </div>
      </div>
   );
};
