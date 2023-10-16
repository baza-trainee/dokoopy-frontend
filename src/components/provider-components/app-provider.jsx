import { useState, useEffect, createContext, useContext } from "react";
import { AdminApi } from "../../api/api";

import localization from "../../assets/language-switcher/localization";

const AppContext = createContext();

export const useAppContext = () => useContext(AppContext);

export const AppProvider = ({ children }) => {
   const [token, setToken] = useState("");
   const [loggedIn, setLoggedIn] = useState(sessionStorage.getItem("isLoggedIn"));

   const [language, setLanguage] = useState("ua");

   useEffect(() => {
      AdminApi.setToken(JSON.parse(sessionStorage.getItem("accToken")));
   }, []);

   function logIn(token) {
      setToken(token);
      sessionStorage.setItem("isLoggedIn", JSON.stringify(true));
      setLoggedIn(true);
      sessionStorage.setItem("accToken", JSON.stringify(token));
      AdminApi.setToken(JSON.parse(sessionStorage.getItem("accToken")));
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
   return (
      <AppContext.Provider
         value={{ token, loggedIn, language, logIn, logOff, switchToEnglish, switchToUkraine }}
      >
         {children}
      </AppContext.Provider>
   );
};
