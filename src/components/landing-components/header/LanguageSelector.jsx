import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { useAppContext } from "../../provider-components/app-provider";

import { Chevron } from "../../../assets/icon/chevron-down";

import localization from "../../../assets/language-switcher/localization";

export const LanguageSelector = () => {
   const [languageMenuOpen, setLanguageMenuOpen] = useState(false);

   const { switchToEnglish, switchToUkraine } = useAppContext();

   useEffect(() => {
      window.addEventListener("click", closeLanguageMenu);

      return () => {
         window.removeEventListener("click", closeLanguageMenu);
      };
   }, []);

   function toggleLanguageMenu() {
      setLanguageMenuOpen(!languageMenuOpen);
   }

   function closeLanguageMenu(event) {
      if (!event.target.classList.contains("language-selector")) {
         setLanguageMenuOpen(false);
      }
   }

   function setLanguageUkraine() {
      switchToUkraine();
      setLanguageMenuOpen(!languageMenuOpen);
   }

   function setLanguageEnglish() {
      switchToEnglish();
      setLanguageMenuOpen(!languageMenuOpen);
   }

   return (
      <div className="language-selector-wrapper">
         <p className="language-selector" onClick={toggleLanguageMenu}>
            {localization.currentLanguage}
            <Chevron />
         </p>
         {languageMenuOpen ? (
            <ul className="language-menu-list">
               <li onClick={setLanguageUkraine} className="language-menu-item">
                  <div to="/" className="selected-language">
                     UA
                  </div>
               </li>
               <li onClick={setLanguageEnglish} className="language-menu-item">
                  <div to="/" className="selected-language">
                     EN
                  </div>
               </li>
            </ul>
         ) : null}
      </div>
   );
};
