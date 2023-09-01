import { DonateButton } from "./DonateButton";

export const Header = () => {
   return (
      <div className="container header">
         <p className="logo">dokoopy</p>
         <nav className="naigation">
            <ul className="naigation-list">
               <li>мета</li>
               <li>бригада</li>
               <li>проєкти</li>
            </ul>
         </nav>
         <DonateButton></DonateButton>
         <p>UA</p>
      </div>
   );
};
