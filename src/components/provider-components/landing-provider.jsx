import { createContext, useContext, useState } from "react";

const LandingContext = createContext();

export const useLandingContext = () => useContext(LandingContext);

export const LandingProvider = ({ children }) => {
   const [language, setLanguage] = useState("ua");

   const switchToUkraine = () => {
      setLanguage("ua");
   };

   const switchToEnglish = () => {
      setLanguage("en");
   };

   return (
      <LandingContext.Provider value={{ language, switchToEnglish, switchToUkraine }}>
         {children}
      </LandingContext.Provider>
   );
};
