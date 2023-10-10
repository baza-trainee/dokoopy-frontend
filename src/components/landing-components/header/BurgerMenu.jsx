import { useState, forwardRef } from "react";
import { Link } from "react-router-dom";

import { LanguageSelectorMobile } from "./LanguageSelectorMobile.jsx";
import { DonateButton } from "../DonateButton.jsx";

import { CloseModal } from "../../../assets/icon/close-modal.jsx";
import { ChevronMobile } from "../../../assets/icon/chevron-down.jsx";

import localization from "../../../assets/language-switcher/localization.js";

export const BurgerMenu = forwardRef(function BurgerMenu(
   { logoClickHandler, closeMenuHandler },
   ref
) {
   const aboutElementId = "about";
   const missionElementId = "mission";

   const [languageMobile, setLanguageMobile] = useState(false);

   function toggleLanguageMobile() {
      setLanguageMobile(!languageMobile);
   }

   return (
      <div className="mobile-menu" ref={ref}>
         <div className="container container_burger">
            <div className="close-modal" onClick={closeMenuHandler}>
               <CloseModal />
            </div>
            <div onClick={logoClickHandler}>
               <Link to="/" className="logo logo_mobile-menu">
                  dokoopy
               </Link>
            </div>
            <nav className="navigation_mobile-menu">
               <ul className="navigation-list_mobile-menu">
                  <li className="navigation-item_mobile-menu" onClick={closeMenuHandler}>
                     <Link to={`/#${missionElementId}`} className="navigaton-link">
                        {localization.header.mission}
                     </Link>
                  </li>
                  <li className="navigation-item_mobile-menu" onClick={closeMenuHandler}>
                     <Link to={`/#${aboutElementId}`} className="navigaton-link">
                        {localization.header.about}
                     </Link>
                  </li>
                  <li className="navigation-item_mobile-menu" onClick={closeMenuHandler}>
                     <Link to="allprojects/1">{localization.header.projects}</Link>
                  </li>
               </ul>
            </nav>
            <div className="language-selector-container">
               <p className="language-selector_mobile" onClick={toggleLanguageMobile}>
                  {localization.currentLanguage} <ChevronMobile />
               </p>
               {languageMobile ? (
                  <LanguageSelectorMobile toggleLanguageMobile={toggleLanguageMobile} />
               ) : null}
            </div>
            <DonateButton buttonClass={"burger"}></DonateButton>
         </div>
      </div>
   );
});

// export const BurgerMenu = ({ logoClickHandler, closeMenuHandler }) => {
//    const aboutElementId = "about";
//    const missionElementId = "mission";

//    const [languageMobile, setLanguageMobile] = useState(false);

//    // function closeMenuHandler(e) {
//    //    setMenuOpen(false);
//    // }

//    function toggleLanguageMobile() {
//       setLanguageMobile(!languageMobile);
//    }

//    return (
//       <div className="mobile-menu">
//          <div className="container container_burger">
//             <div className="close-modal" onClick={closeMenuHandler}>
//                <CloseModal />
//             </div>
//             <div onClick={logoClickHandler}>
//                <Link to="/" className="logo logo_mobile-menu">
//                   dokoopy
//                </Link>
//             </div>
//             <nav className="navigation_mobile-menu">
//                <ul className="navigation-list_mobile-menu">
//                   <li className="navigation-item_mobile-menu" onClick={closeMenuHandler}>
//                      <Link to={`/#${missionElementId}`} className="navigaton-link">
//                         {localization.header.mission}
//                      </Link>
//                   </li>
//                   <li className="navigation-item_mobile-menu" onClick={closeMenuHandler}>
//                      <Link to={`/#${aboutElementId}`} className="navigaton-link">
//                         {localization.header.about}
//                      </Link>
//                   </li>
//                   <li className="navigation-item_mobile-menu" onClick={closeMenuHandler}>
//                      <Link to="allprojects/1">{localization.header.projects}</Link>
//                   </li>
//                </ul>
//             </nav>
//             <div className="language-selector-container">
//                <p className="language-selector_mobile" onClick={toggleLanguageMobile}>
//                   {localization.currentLanguage} <ChevronMobile />
//                </p>
//                {languageMobile ? (
//                   <LanguageSelectorMobile toggleLanguageMobile={toggleLanguageMobile} />
//                ) : null}
//             </div>
//             <DonateButton buttonClass={"burger"}></DonateButton>
//          </div>
//       </div>
//    );
// };
