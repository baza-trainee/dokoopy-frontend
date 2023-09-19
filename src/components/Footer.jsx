import { LogoFooterIcon } from "../assets/icon/LogoFooterIcon";
import { DonateButton } from "./DonateButton";
import policy from "../assets/documents/policy.pdf";
import rules from "../assets/documents/rules.pdf";

export const Footer = () => {
   return (
      <footer className="footer">
         <div className="container">
         <div className='footer-logo-container'>
            <div className='logo-svg-container'>
               <LogoFooterIcon />
            </div>
         <div className='logo-text'>DOkoopy</div>
         </div>
         <div className='container-btn'>
         <DonateButton buttonClass={"footerButton"} />
         </div>
         <div className='footer-policy-container'>
            <div className='footer-policy-link-container'>
               <a href={policy} target="_blank" className='footer-policy-link' rel="noreferrer">Політика конфіденційності</a>
               <a href={rules} target="_blank" className='footer-policy-link' rel="noreferrer">Правила користування сайтом</a>
               <a className='footer-policy-link' href="/not-found">Звітність</a>
            </div>
            <p className='footer-policy-text'>Розробка Baza Trainee Ukraine 2023 © Всі права захищені</p>
         </div>
         </div>
      </footer>
     
   );
};
