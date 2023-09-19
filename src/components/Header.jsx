import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { Link } from "react-router-dom";
import { BurgerMenuIcon } from "../assets/icon/burger-menu.jsx";
import { Chevron, ChevronMobile } from "../assets/icon/chevron-down.jsx";
import { CloseModal } from "../assets/icon/close-modal.jsx";
import localization from "../assets/language-switcher/localization";
import { DonateButton } from "./DonateButton";

const mobileMenuPortal = document.getElementById("mobile-menu");

export const Header = () => {
   const [menuOpen, setMenuOpen] = useState(false);
   const [languageMenuOpen, setLanguageMenuOpen] = useState(false);
   const [languageMobile, setLanguageMobile] = useState(false);
   const [currentLanguage, setCurrentLanguage] = useState(
      localStorage.getItem("currentLanguage") || "ua"
   );

   const mobileMenuRef = useRef(null);
   const aboutElementId = "about";
   const missionElementId = "mission";

   useEffect(() => {
      const storedLanguage = localStorage.getItem("currentLanguage");
      if (storedLanguage) {
         setCurrentLanguage(storedLanguage);
         localization.setLanguage(storedLanguage);
      }
   }, []);

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

   function selectLanguage(language) {
      console.log(`Selected language: ${language}`);
      setCurrentLanguage(language);
      localization.setLanguage(language);
      localStorage.setItem("currentLanguage", language);
      setLanguageMenuOpen(false);
      setLanguageMobile(false);
   }

   function openMenuHandler(e) {
      e.preventDefault();
      setMenuOpen(true);
   }

   function closeMenuHandler(e) {
      e.preventDefault();
      setMenuOpen(false);
   }

   function logoClickHandler(e) {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
      setMenuOpen(false);
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
                           {localization.mission}
                        </Link>
                     </li>
                     <li className="navigation-list-item">
                        <Link to={`/#${aboutElementId}`} className="navigaton-link">
                           {localization.about}
                        </Link>
                     </li>
                     <li className="navigation-list-item">
                        <Link to="allprojects/1" className="navigaton-link">
                           {localization.projects}
                        </Link>
                     </li>
                  </ul>
               </nav>
               <div className="icon-button-block">
                  <DonateButton buttonClass={"headerButton"}></DonateButton>
                  <div className="language-selector-wrapper">
                     <p className="language-selector" onClick={toggleLanguageMenu}>
                        {currentLanguage === "ua" ? "UA" : "EN"}
                        <Chevron />
                     </p>
                     {languageMenuOpen ? (
                        <ul className="language-menu-list">
                           <li onClick={() => selectLanguage("ua")} className="language-menu-item">
                              <Link to="/" className="selected-language">
                                 UA
                              </Link>
                           </li>
                           <li onClick={() => selectLanguage("en")} className="language-menu-item">
                              <Link to="en" className="selected-language">
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
                                <Link to="allprojects">{localization.projects}</Link>
                             </li>
                          </ul>
                       </nav>
                       <div className="language-selector-container">
                          <p className="language-selector_mobile" onClick={toggleLanguageMobile}>
                             {currentLanguage === "ua" ? "UA" : "EN"} <ChevronMobile />
                          </p>
                          {languageMobile ? (
                             <ul className="language-menu-list-mobile">
                                <li
                                   onClick={() => selectLanguage("ua")}
                                   className="language-menu-item-mobile"
                                >
                                   <Link to="/" className="selected-language-mobile">
                                      UA
                                   </Link>
                                </li>
                                <li
                                   onClick={() => selectLanguage("en")}
                                   className="language-menu-item"
                                >
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
