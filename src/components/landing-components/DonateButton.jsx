import { useState, useEffect } from "react";
import { Modal } from "./Modal";
import { lendingData } from '../../api/api';

import localization from "../../assets/language-switcher/localization";

export const DonateButton = ({ buttonClass, onClick, href, closeMenuHandler }) => {
   const [modalOpen, setModalOpen] = useState(false);
   const [link, setLink] = useState(null);

useEffect(() => {
   lendingData.getBank().then(res => setLink(res.data.bank[0].link) );
}, [])

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
   // console.log(localization.donate);
   return (
      <>
         <a
            className={buttonClass + " donateButton"}
            onClick={handleClick}
            href={link}
            target="_blank"
         >
            {localization.donate}
         </a>

         {modalOpen && <Modal onClose={handleCloseModal} closeMenuHandler={closeMenuHandler} />}
      </>
   );
};

// для використання цього компоненту необхідно при його вставці додати props -
// buttonClass, який відповідає розмірам кнопки. Існує 3 класи, які
// мають медіаправила: для хедера "headerButton", для основного контенту
// "mainButton", для бургерного меню "burger" і для футера "footerButton".
