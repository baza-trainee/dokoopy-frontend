import { createContext, useContext, useState } from "react";

import localization from "../../assets/language-switcher/localization";

const LandingContext = createContext();

export const useLandingContext = () => useContext(LandingContext);

export const LandingProvider = ({ children }) => {
   const [language, setLanguage] = useState("ua");

   function switchToUkraine() {
      localization.setLanguage("ua");
      setLanguage("ua");
   }

   function switchToEnglish() {
      localization.setLanguage("en");
      setLanguage("en");
   }

   return (
      <LandingContext.Provider value={{ language, switchToEnglish, switchToUkraine }}>
         {children}
      </LandingContext.Provider>
   );
};
