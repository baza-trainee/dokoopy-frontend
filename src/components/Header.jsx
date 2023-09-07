import { Link } from "react-router-dom";
import { DonateButton } from "./DonateButton";

import { Chevron } from "../assets/chevron-down.jsx";
import { BurgerMenu } from "../assets/burger-menu.jsx";

export const Header = () => {
   return (
      <header>
         <div className="container">
            <div className="header">
               <Link to="/" className="logo">
                  dokoopy
               </Link>
               <nav className="naigation">
                  <ul className="naigation-list">
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
               <div className="burger-menu">
                  <BurgerMenu />
               </div>
            </div>
         </div>
         <div className="mobile-menu">
            <div className="container">
               <Link to="/" className="logo logo_mobile-menu">
                  dokoopy
               </Link>
               <nav className="navigation_mobile-menu">
                  <ul className="navigation-list_mobile-menu">
                     <li>мета</li>
                     <li>бригада</li>
                     <li>
                        <Link to="allprojects">проєкти</Link>
                     </li>
                  </ul>
               </nav>
            </div>
         </div>
      </header>
   );
};
