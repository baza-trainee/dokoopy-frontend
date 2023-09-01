import { DonateButton } from "./DonateButton";
import { Chevron } from "../assets/chevron-down.jsx";

export const Header = () => {
   return (
      <header>
         <div className="container">
            <div className="header">
               <p className="logo">dokoopy</p>
               <nav className="naigation">
                  <ul className="naigation-list">
                     <li>мета</li>
                     <li>бригада</li>
                     <li>проєкти</li>
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
