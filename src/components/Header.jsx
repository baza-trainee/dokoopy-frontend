import { useState } from "react";

import { createPortal } from "react-dom";
import { Link } from "react-router-dom";

import { DonateButton } from "./DonateButton";

import { Chevron } from "../assets/icon/chevron-down.jsx";
import { ChevronMobile } from "../assets/icon/chevron-down.jsx";
import { BurgerMenu } from "../assets/icon/burger-menu.jsx";
import { CloseModal } from "../assets/icon/close-modal.jsx";

const mobileMenuPortal = document.getElementById("mobile-menu");

export const Header = () => {
   const [menuOpen, isMenuOpen] = useState(false);

   function openMenuHandler(e) {
      e.preventDefault();
      isMenuOpen(true);
   }

   function closeMenuHandler(e) {
      e.preventDefault();
      isMenuOpen(false);
   }

   return (
      <header className="container_header">
         <div className="container">
            <div className="header">
               <Link to="/" className="logo">
                  dokoopy
               </Link>
               <nav className="navigation">
                  <ul className="navigation-list">
                     <li>мета</li>
                     <li>бригада</li>
                     <li>
                        <Link to="allprojects">проєкти</Link>
                     </li>
                  </ul>
               </nav>
               <DonateButton buttonClass={"headerButton"}></DonateButton>
               <p className="language-selector">
                  UA <Chevron />
               </p>
               <div className="burger-menu" onClick={openMenuHandler}>
                  <BurgerMenu />
               </div>
            </div>
         </div>
         {menuOpen
            ? createPortal(
                 <div className="mobile-menu">
                    <div className="container">
                       <div className="close-modal" onClick={closeMenuHandler}>
                          <CloseModal />
                       </div>
                       <Link to="/" className="logo logo_mobile-menu">
                          dokoopy
                       </Link>
                       <nav className="navigation_mobile-menu">
                          <ul className="navigation-list_mobile-menu">
                             <li className="navigation-item_mobile-menu">мета</li>
                             <li className="navigation-item_mobile-menu">бригада</li>
                             <li className="navigation-item_mobile-menu">
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
