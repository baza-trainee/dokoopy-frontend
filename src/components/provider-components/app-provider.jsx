import { createContext, useState, useContext } from "react";

import localization from "../../assets/language-switcher/localization";

const AppContext = createContext();

export const useAppContext = () => useContext(AppContext);

export const AppProvider = ({ children }) => {
   const [token, setToken] = useState("");
   const [loggedIn, setLoggedIn] = useState(localStorage.getItem("isLoggedIn"));

   const [language, setLanguage] = useState("ua");

   function logIn(token) {
      setToken(token);
      localStorage.setItem("isLoggedIn", JSON.stringify(true));
      setLoggedIn(true);
   }

   function logOff() {
      setToken("");
      localStorage.setItem("isLoggedIn", JSON.stringify(false));
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
