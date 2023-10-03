import React, { useEffect, useRef, useState } from "react";

import { createPortal } from "react-dom";

import { Link } from "react-router-dom";
import { useLandingContext } from "../provider-components/landing-provider.jsx";

import { BurgerMenuIcon } from "../../assets/icon/burger-menu.jsx";
import { DonateButton } from "./DonateButton.jsx";

import { Chevron, ChevronMobile } from "../../assets/icon/chevron-down.jsx";
import { CloseModal } from "../../assets/icon/close-modal.jsx";

import localization from "../../assets/language-switcher/localization.js";

const mobileMenuPortal = document.getElementById("mobile-menu");

export const Header = () => {
   const [menuOpen, setMenuOpen] = useState(false);
   const [languageMenuOpen, setLanguageMenuOpen] = useState(false);
   const [languageMobile, setLanguageMobile] = useState(false);

   const mobileMenuRef = useRef(null);
   const aboutElementId = "about";
   const missionElementId = "mission";

   const { language, switchToEnglish, switchToUkraine } = useLandingContext();
   // console.log("28", language, localization.getLanguage());

   useEffect(() => {
      const handler = event => {
         if (!mobileMenuRef.current) {
            return;
         }
         if (!mobileMenuRef.current.contains(event.target)) {
            setMenuOpen(false);
         }
      };
      document.addEventListener("click", handler, true);
      return () => {
         document.removeEventListener("click", handler);
      };
   }, []);

   function toggleLanguageMenu() {
      setLanguageMenuOpen(!languageMenuOpen);
   }

   function toggleLanguageMobile() {
      setLanguageMobile(!languageMobile);
   }

   function openMenuHandler(e) {
      e.preventDefault();
      setMenuOpen(true);
   }

   function closeMenuHandler(e) {
      setMenuOpen(false);
   }

   function logoClickHandler(e) {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
      setMenuOpen(false);
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
      <header className="wrapper-header">
         <div className="container">
            <div className="header">
               <div>
                  <Link to="/" className="logo" onClick={logoClickHandler}>
                     dokoopy
                  </Link>
               </div>
               <nav className="navigation">
                  <ul className="navigation-list">
                     <li className="navigation-list-item">
                        <Link to={`/#${missionElementId}`} className="navigaton-link">
                           {localization.header.mission}
                        </Link>
                     </li>
                     <li className="navigation-list-item">
                        <Link to={`/#${aboutElementId}`} className="navigaton-link">
                           {localization.header.about}
                        </Link>
                     </li>
                     <li className="navigation-list-item">
                        <Link to="allprojects/1" className="navigaton-link">
                           {localization.header.projects}
                        </Link>
                     </li>
                  </ul>
               </nav>
               <div className="icon-button-block">
                  <DonateButton buttonClass={"headerButton"}></DonateButton>
                  <div className="language-selector-wrapper">
                     <p className="language-selector" onClick={toggleLanguageMenu}>
                        {localization.currentLanguage}
                        <Chevron />
                     </p>
                     {languageMenuOpen ? (
                        <ul className="language-menu-list">
                           <li onClick={setLanguageUkraine} className="language-menu-item">
                              <Link to="/" className="selected-language">
                                 UA
                              </Link>
                           </li>
                           <li onClick={setLanguageEnglish} className="language-menu-item">
                              <Link to="/" className="selected-language">
                                 EN
                              </Link>
                           </li>
                        </ul>
                     ) : null}
                  </div>
                  <div className="burger-menu" onClick={openMenuHandler}>
                     <BurgerMenuIcon />
                  </div>
               </div>
            </div>
         </div>
         {menuOpen
            ? createPortal(
                 <div className="mobile-menu" ref={mobileMenuRef}>
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
                                   {localization.mission}
                                </Link>
                             </li>
                             <li className="navigation-item_mobile-menu" onClick={closeMenuHandler}>
                                <Link to={`/#${aboutElementId}`} className="navigaton-link">
                                   {localization.about}
                                </Link>
                             </li>
                             <li className="navigation-item_mobile-menu" onClick={closeMenuHandler}>
                                <Link to="allprojects/1">{localization.projects}</Link>
                             </li>
                          </ul>
                       </nav>
                       <div className="language-selector-container">
                          <p className="language-selector_mobile" onClick={toggleLanguageMobile}>
                             UA <ChevronMobile />
                          </p>
                          {languageMobile ? (
                             <ul className="language-menu-list-mobile">
                                <li
                                   onClick={toggleLanguageMobile}
                                   className="language-menu-item-mobile"
                                >
                                   <Link to="/" className="selected-language-mobile">
                                      UA
                                   </Link>
                                </li>
                                <li onClick={toggleLanguageMobile} className="language-menu-item">
                                   <Link to="en" className="selected-language-mobile">
                                      EN
                                   </Link>
                                </li>
                             </ul>
                          ) : null}
                       </div>
                       <DonateButton buttonClass={"burger"}></DonateButton>
                    </div>
                 </div>,
                 mobileMenuPortal
              )
            : null}
      </header>
   );
};
