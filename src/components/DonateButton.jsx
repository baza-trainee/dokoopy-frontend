import { useState } from "react";
import { Modal } from "./Modal";

export const DonateButton = ({ buttonClass, onClick, href }) => {
   const [modalOpen, setModalOpen] = useState(false);

   const handleClick = e => {
      if (href) {
         window.open(href, "_blank", "noopener noreferrer");
      }
      if (onClick) {
         onClick();
      }
      setModalOpen(true);
   };

   const handleCloseModal = () => {
      setModalOpen(false);
   };

   return (
      <>
         <a
            className={buttonClass + " donateButton"}
            onClick={handleClick}
            href="https://send.monobank.ua/jar/4B1mQWmGVS"
            target="_blank"
         >
            ЗРОБИТИ ДОНАТ
         </a>
         {modalOpen && <Modal onClose={handleCloseModal} />}
      </>
   );
};

// для використання цього компоненту необхідно при його вставці додати props -
// buttonClass, який відповідає розмірам кнопки. Існує 3 класи, які
// мають медіаправила: для хедера "headerButton", для основного контенту
// "mainButton" і для бургерного меню "burger".
