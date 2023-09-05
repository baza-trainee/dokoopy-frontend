import { Link } from "react-router-dom";
import { DonateButton } from "./DonateButton";
import { Chevron } from "../assets/chevron-down.jsx";

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
            </div>
         </div>
      </header>
   );
};
