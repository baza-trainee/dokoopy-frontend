import { Link } from "react-router-dom";

import { useAppContext } from "../../provider-components/app-provider";

export const LanguageSelectorMobile = ({ toggleLanguageMobile }) => {
   const { language, switchToEnglish, switchToUkraine } = useAppContext();

   function setLanguageUkraine() {
      switchToUkraine();
      toggleLanguageMobile();
   }

   function setLanguageEnglish() {
      switchToEnglish();
      toggleLanguageMobile();
   }

   return (
      <ul className="language-menu-list-mobile">
         <li onClick={setLanguageUkraine} className="language-menu-item-mobile">
            <div className="selected-language-mobile">UA</div>
         </li>
         <li onClick={setLanguageEnglish} className="language-menu-item">
            <div className="selected-language-mobile">EN</div>
         </li>
      </ul>
   );
};

{
   /* <ul className="language-menu-list-mobile">
<li onClick={setLanguageUkraine} className="language-menu-item-mobile">
   <Link to="/" className="selected-language-mobile">
      UA
   </Link>
</li>
<li onClick={setLanguageEnglish} className="language-menu-item">
   <Link to="/" className="selected-language-mobile">
      EN
   </Link>
</li>
</ul> */
}
