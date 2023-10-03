import localization from "../../assets/language-switcher/localization.js";

import { LogoFooterIcon } from "../../assets/icon/LogoFooterIcon";
import { DonateButton } from "./DonateButton";
import policy from "../../assets/documents/policy.pdf";
import rules from "../../assets/documents/rules.pdf";
import { useLoadingData } from "../../hook/useLoadingData";
import { lendingData } from "../../api/api";

export const Footer = () => {
   const { data, isLoading, error } = useLoadingData(lendingData.getReport);
   return (
      <footer className="footer">
         <div className="container">
            <div className="footer-logo-container">
               <div className="logo-svg-container">
                  <LogoFooterIcon />
               </div>
               <div className="logo-text">DOkoopy</div>
            </div>
            <div className="container-btn">
               <DonateButton buttonClass={"footerButton"} />
            </div>
            <div className="footer-policy-container">
               <div className="footer-policy-link-container">
                  <a href={policy} target="_blank" className="footer-policy-link" rel="noreferrer">
                     {localization.privacyPolicy}
                  </a>
                  <a href={rules} target="_blank" className="footer-policy-link" rel="noreferrer">
                     {localization.conditionsOfUse}
                  </a>
                   {!isLoading && !error && (data.reports.map(report => {
                     return (
                        <a key={report.id} href={`https://dokoopy.onrender.com/${report.reportURL}`}
                        className="footer-policy-link" target="_blank" rel="noreferrer" 
                        >{localization.report}</a>
                     );
                  }))}
                  {!isLoading && error && (
                  <a className="footer-policy-link" href="/not-found">
                     {localization.report}
                  </a>
                  )}
               </div>
                  
               <p className="footer-policy-text">{localization.footerText}</p>
            </div>
         </div>
      </footer>
   );
};
