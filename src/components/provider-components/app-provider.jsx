import { useState, useEffect, createContext, useContext } from "react";
import { AdminApi } from "../../api/api";

import localization from "../../assets/language-switcher/localization";

const AppContext = createContext();

export const useAppContext = () => useContext(AppContext);

export const AppProvider = ({ children }) => {
   const [token, setToken] = useState("");
   const [loggedIn, setLoggedIn] = useState(sessionStorage.getItem("isLoggedIn"));
   const [isLoading, setIsLoading] = useState(false);
   const [language, setLanguage] = useState(
      JSON.parse(sessionStorage.getItem("preferableLanguage"))
   );

   const currentLanguage = navigator.language;

   useEffect(() => {
      if (JSON.parse(sessionStorage.getItem("preferableLanguage")) === "ua") {
         return switchToUkraine();
      } else if (JSON.parse(sessionStorage.getItem("preferableLanguage")) === "en") {
         return switchToEnglish();
      }
      getDefaultBrowserLanguage();
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
      sessionStorage.setItem("isLoggedIn", JSON.stringify(false));
      sessionStorage.setItem("accToken", JSON.stringify(""));
      AdminApi.setToken(JSON.parse(sessionStorage.getItem("accToken")));
      setLoggedIn(false);
   }

   function switchToUkraine() {
      sessionStorage.setItem("preferableLanguage", JSON.stringify("ua"));
      localization.setLanguage("ua");
      setLanguage("ua");
   }

   function switchToEnglish() {
      sessionStorage.setItem("preferableLanguage", JSON.stringify("en"));
      localization.setLanguage("en");
      setLanguage("en");
   }

   function getDefaultBrowserLanguage() {
      if (currentLanguage === "ru-RU" || currentLanguage === "uk-UA" || currentLanguage === "uk") {
         return switchToUkraine();
      }
      return switchToEnglish();
   }

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
