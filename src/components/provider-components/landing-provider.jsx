import { createContext, useContext, useState } from "react";

const LandingContext = createContext();

export const useLandingContext = () => useContext(LandingContext);

export const LandingProvider = ({ children }) => {
   const [language, setLanguage] = useState("ua");

   function switchToUkraine() {
      setLanguage("ua");
   }

   function switchToEnglish() {
      setLanguage("en");
   }

   return (
      <LandingContext.Provider value={{ language, switchToEnglish, switchToUkraine }}>
         {children}
      </LandingContext.Provider>
   );
};
