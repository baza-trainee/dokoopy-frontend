import React, { useEffect, useRef, forwardRef, useState } from "react";

import { createPortal } from "react-dom";

import { Link } from "react-router-dom";
import { useAppContext } from "../provider-components/app-provider.jsx";
import { DonateButton } from "./DonateButton.jsx";
import { BurgerMenu } from "./header/BurgerMenu.jsx";
import { LanguageSelector } from "./header/LanguageSelector.jsx";

import { BurgerMenuIcon } from "../../assets/icon/burger-menu.jsx";

import localization from "../../assets/language-switcher/localization.js";

const mobileMenuPortal = document.getElementById("mobile-menu");

export const Header = () => {
   const [menuOpen, setMenuOpen] = useState(false);

   const mobileMenuRef = useRef(null);
   const aboutElementId = "about";
   const missionElementId = "mission";

   const { language, switchToEnglish, switchToUkraine } = useAppContext();

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
                  <LanguageSelector></LanguageSelector>
                  <div className="burger-menu" onClick={openMenuHandler}>
                     <BurgerMenuIcon />
                  </div>
               </div>
            </div>
         </div>
         {menuOpen
            ? createPortal(
                 <BurgerMenu
                    closeMenuHandler={closeMenuHandler}
                    logoClickHandler={logoClickHandler}
                    ref={mobileMenuRef}
                 ></BurgerMenu>,
                 mobileMenuPortal
              )
            : null}
      </header>
   );
};
