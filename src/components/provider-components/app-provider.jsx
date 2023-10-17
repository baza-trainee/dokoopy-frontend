import { useState, useEffect, createContext, useContext } from "react";
import { AdminApi } from "../../api/api";

import localization from "../../assets/language-switcher/localization";

const AppContext = createContext();

export const useAppContext = () => useContext(AppContext);

export const AppProvider = ({ children }) => {
   const [token, setToken] = useState("");
   const [loggedIn, setLoggedIn] = useState(sessionStorage.getItem("isLoggedIn"));
   const [isLoading, setIsLoading] = useState(false);
   const [language, setLanguage] = useState("ua");

   const currentLanguage = navigator.language;

   useEffect(() => {
      getDefaultBroweserLanguage();
   }, []);

   useEffect(() => {
      AdminApi.setToken(JSON.parse(sessionStorage.getItem("accToken")));
      setIsLoading(true);
   }, []);

   function logIn(token) {
      setToken(token);
      sessionStorage.setItem("isLoggedIn", JSON.stringify(true));
      sessionStorage.setItem("accToken", JSON.stringify(token));
      AdminApi.setToken(JSON.parse(sessionStorage.getItem("accToken")));
      setLoggedIn(true);
   }

   function logOff() {
      setToken("");
      sessionStorage.setItem("isLoggedIn", JSON.stringify(false));
      setLoggedIn(false);
   }

   function switchToUkraine() {
      localization.setLanguage("ua");
      setLanguage("ua");
   }

   function switchToEnglish() {
      localization.setLanguage("en");
      setLanguage("en");
   }

   function getDefaultBroweserLanguage() {
      if (currentLanguage === "ru-RU" || currentLanguage === "uk-UA") {
         return switchToUkraine();
      }
      return switchToEnglish();
   }

   console.log(navigator.language);

   return (
      <AppContext.Provider
         value={{
            token,
            loggedIn,
            isLoading,
            language,
            logIn,
            logOff,
            switchToEnglish,
            switchToUkraine,
         }}
      >
         {children}
      </AppContext.Provider>
   );
};
