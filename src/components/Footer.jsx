import { DonateButton } from "./DonateButton";

export const Footer = () => {
   return (
      <footer className="footer">
         <div className="container">
         <div className='footer-logo-container'>
            <div className='logo-svg-container'>
              <div className='logo-svg'></div>
            </div>
         <div className='logo-text'>DOkoopy</div>
         </div>
         <div className='container-btn'>
         <DonateButton buttonClass={"mainButton"} />
         </div>
         <div className='footer-policy-container'>
            <div className='footer-policy-link-container'>
                  <a className='footer-policy-link'>Політика конфіденційності</a>
                  <a className='footer-policy-link'>
                     Правила користування сайтом
                     </a> 
                  <a className='footer-policy-link'>Звітність</a>
            </div>
            <p className='footer-policy-text'>Розробка Baza Trainee Ukraine 2023 © Всі права захищені</p>
         </div>
         </div>
      </footer>
   );
};
