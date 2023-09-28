import { createContext, useContext, useState } from "react";

const AdminContext = createContext();

export const useAdminContext = () => useContext(AdminContext);

export const AdminProvider = ({ children }) => {
   const [token, setToken] = useState("");
   const [loggedIn, setLoggedIn] = useState(false);

   function logIn(token) {
      setToken(token);
      setLoggedIn(true);
   }

   function logOff() {
      setToken("");
      setLoggedIn(false);
   }

   return (
      <AdminContext.Provider value={{ token, loggedIn, logIn, logOff }}>
         {children}
      </AdminContext.Provider>
   );
};
