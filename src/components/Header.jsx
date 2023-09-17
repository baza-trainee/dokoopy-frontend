import { useState, useEffect, useRef } from "react";

import { createPortal } from "react-dom";
import { Link } from "react-router-dom";

import { DonateButton } from "./DonateButton";

import { BurgerMenu } from "../assets/icon/burger-menu.jsx";
import { Chevron, ChevronMobile } from "../assets/icon/chevron-down.jsx";
import { CloseModal } from "../assets/icon/close-modal.jsx";

const mobileMenuPortal = document.getElementById("mobile-menu");

export const Header = () => {
   const [menuOpen, setMenuOpen] = useState(false);

   const mobileMenuRef = useRef(null);

   const aboutElementId = "about";
   const missionElementId = "mission";

   useEffect(() => {
      const handler = event => {
         if (!mobileMenuRef.current) {
            return;
         }
         // if click was not inside of the element. "!" means not
         // in other words, if click is outside the modal element
         if (!mobileMenuRef.current.contains(event.target)) {
            setMenuOpen(false);
         }
      };
      // the key is using the `true` option
      // `true` will enable the `capture` phase of event handling by browser
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
      e.preventDefault();
      setMenuOpen(false);
   }

   function logoClickHandler(e) {
      // e.preventDefault();
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
                           мета
                        </Link>
                     </li>
                     <li className="navigation-list-item">
                        <Link to={`/#${aboutElementId}`} className="navigaton-link">
                           бригада
                        </Link>
                     </li>
                     <li className="navigation-list-item">
                        <Link to="allprojects" className="navigaton-link">
                           проєкти
                        </Link>
                     </li>
                  </ul>
               </nav>
               <div className="icon-button-blok">
                  <DonateButton buttonClass={"headerButton"}></DonateButton>
                  <p className="language-selector">
                     UA <Chevron />
                  </p>
                  <div className="burger-menu" onClick={openMenuHandler}>
                     <BurgerMenu />
                  </div>
               </div>
            </div>
         </div>
         {menuOpen
            ? createPortal(
                 <div className="mobile-menu" ref={mobileMenuRef}>
                    <div className="container">
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
                                   мета
                                </Link>
                             </li>
                             <li className="navigation-item_mobile-menu" onClick={closeMenuHandler}>
                                <Link to={`/#${aboutElementId}`} className="navigaton-link">
                                   бригада
                                </Link>
                             </li>
                             <li className="navigation-item_mobile-menu" onClick={closeMenuHandler}>
                                <Link to="allprojects">проєкти</Link>
                             </li>
                          </ul>
                       </nav>
                       <div className="language-selector_mobile">
                          UA <ChevronMobile />
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
